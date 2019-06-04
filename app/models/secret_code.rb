class SecretCode < ApplicationRecord
  belongs_to :user, optional: true
  has_secure_token :coded_value

  default_scope { order(created_at: :asc) }
  validates :coded_value,uniqueness: true

  def self.bulk_create(number)
    number.times do
      SecretCode.create
    end
  end
end
