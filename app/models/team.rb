class Team < ApplicationRecord
    belongs_to :user
    has_many :units

    delegate :username, to: :user, allow_nil: true

end
