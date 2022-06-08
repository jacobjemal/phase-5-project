class TeamSerializer < ActiveModel::Serializer
  attributes :id, :username

  belongs_to :user
  
end
