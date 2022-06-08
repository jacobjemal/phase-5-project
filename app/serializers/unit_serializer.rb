class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name, :hp, :move, :attack, :defense, :weapon, :range, :team_id, :stationery_sprite, :attack_sprite, :description

  belongs_to :team
  
end


