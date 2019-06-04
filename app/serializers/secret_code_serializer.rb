class SecretCodeSerializer < ActiveModel::Serializer
  attributes :id, :coded_value, :user_id,:is_occupied
  belongs_to :user

  def is_occupied
    return (object.user_id.nil? ? 'No' : 'Yes')
  end

end
