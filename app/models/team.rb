class Team < ApplicationRecord
    belongs_to :user
    has_many :units, dependent: :destroy_async

    # who fights who / goes first


    # colors what teamm is what color blue / red 


    def players # is the same as if you wright t1 = Team.first.units
        player = self.units 
        
        # print "welcome #{self.user.username}"
    end

end
