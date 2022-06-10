class User < ApplicationRecord
    has_many :teams, dependent: :destroy_async
    # has_many :units, dependent: :destroy_async

    ## droped password off the db
    # has_secure_password

    validates :username, presence: true, uniqueness: true

    # moves the units and takes turns 

    def change_player
    end


end
