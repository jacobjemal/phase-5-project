class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name, :hp, :move, :attack, :defense, :weapon, :range, :team_id, :stationery_sprite_blue, :stationery_sprite_red, :attack_sprite, :description

  belongs_to :team
  
end


