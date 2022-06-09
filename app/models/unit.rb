class Unit < ApplicationRecord
    belongs_to :team 

    ### TODO ###
    # attack #
    # need to return the updated the "temp data base for the Units"
    # need to have the player removed from the temp data base 
    # need to reset the temp data base aftr the game 


    def attack_turn(defender) 
        attack = self.attack - defender.defense
        if attack < 0 
            defender.hp = (defender.hp  -  1) 
        else 
            defender.hp = (defender.hp - attack) 
            defender.save
        end
    end 

    ### movement ###
end


