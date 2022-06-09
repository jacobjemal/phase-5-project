class Team < ApplicationRecord
    belongs_to :user
    has_many :units, dependent: :destroy_async


    def battle # who fights who

    end
end
