class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role
  has_one :secret_code
  def name
    object.name
  end

  def role
    object.roles[0].try(:name).try(:titlecase)
  end
end
