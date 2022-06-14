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
            if defender.team == self.team
                puts "sorry cant attack allies"
                return 0 # Seth cant attack Ephraim
            end
        if attack < 0 
            defender.hp = (defender.hp  -  2)
        else 
            defender.hp = (defender.hp - attack)
        end
        puts "#{self.name} from team #{self.team_id} attacked #{defender.name} from team #{defender.team_id} with a #{self.weapon}  #*#*#*#  #{defender.name} has #{defender.hp} hp left"
        if defender.hp = 0
            defender.destroy #disappear?
            puts "#{self.name} from 'team #{self.team_id}' has killed #{defender.name} from 'team #{defender.team_id}' with a #{self.weapon}"
        end
        defender.save
    end 

    ### movement ###

    def move_unit(spaces_moved)
        move = self.move #+ spaces_moved.move
        if spaces_moved <= self.move
            # spaces_moved = (self.move + spaces_moved)
            "#{self.name} moved #{spaces_moved} spaces"
            # spaces_moved.save
        else
            return "#{self.name} can't move that far"
        end
    end


end


