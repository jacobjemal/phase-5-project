class Team < ApplicationRecord
    belongs_to :user
    has_many :units, dependent: :destroy_async

    # who fights who / goes first
    def battle 

    end

    # colors what teamm is what color blue / red 
end
