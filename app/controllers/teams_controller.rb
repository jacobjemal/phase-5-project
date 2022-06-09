class TeamsController < ApplicationController

    def index
        teams = Team.all 
        render json: teams
    end

    def show
        team = Team.find(params[:id])
        render json: team, status: 200
    end

    def create
        team = Team.create!(team_params)
        render json: team,  status: :created
    end

    def update
        team = Team.find(params[:id])
        team.update!(team_params)
        render json: team, status: :created
    end

    def destroy
        team = Team.find(params[:id])
        team.destroy
        render json: {}, status: 200
        # head :no_content
    end

    private

    def team_params
        params.permit(:user_id)
    end
end
