class TeamSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  has_many :units
  
end
