class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,:trackable

  has_one :secret_code
  validates :email,uniqueness: true

  def name
    "#{self.first_name} #{self.last_name}"
  end

  def self.create_with_secret_code(user_parameters,secret_code)
    errors = []
    @user = nil
    User.transaction do
      user_parameters.delete("code")
      @user = User.new(user_parameters)
      @user.errors.full_messages.each{|message| errors << message} if !@user.valid?
      errors << "Invalid Secret Code" if secret_code.nil?
      errors << "Secret Code already taken" if secret_code.try(:user).present?
      if errors.size==0
        @user.save!
        @user.add_role(:customer)
        secret_code.update_attributes({user_id: @user.id})
      end
    end
    return (errors.size>0)? errors : @user
  end

end
