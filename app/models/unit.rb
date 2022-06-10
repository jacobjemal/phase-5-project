class Unit < ApplicationRecord
    belongs_to :team 

    ### TODO ###
    # attack #
    # need to return the updated the "temp data base for the Units"
    # need to have the player removed from the temp data base 
    # need to reset the temp data base aftr the game 
    # a unit can only have one action once per turn 

    def attack_turn(defender) 
        attack = self.attack - defender.defense
        if attack < 0 
            defender.hp = (defender.hp  -  1) 
        else 
            defender.hp = (defender.hp - attack) 
        end
        puts "#{self.name} attacked #{defender.name}"
        defender.save

        # if defender.hp =< 0 
        # defender.remove / destroy 
    end 



    ### movement ###

    def move_unit(spaces_moved)
        move = self.move #+ spaces_moved.move
        if spaces_moved <= self.move
            # spaces_moved = (self.move + spaces_moved)
            "#{self.name} moved #{spaces_moved} spaces"
            # spaces_moved.save
        else
            return "cant move that far"
        end
    end
end


