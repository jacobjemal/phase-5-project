class UsersController < ApplicationController

    def index
        user = User.all
        render json: user, status: 200
    end

    def show
        current_user = User.find(params[:id]) 
        render json: current_user, status: 200
    end


    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end


    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {}, status: 200
        # head :no_content
    end

    private

    def user_params
        params.permit(:username)
    end 
end 