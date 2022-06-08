class Unit < ApplicationRecord
    belongs_to :team 
    belongs_to :user

    # delegate :username, to: :user, allow_nil: true

end
