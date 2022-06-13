class UnitsController < ApplicationController

    def index
        units = Unit.all
        render json: units, status: 200 
    end

    def show
        unit = Unit.find(params[:id])
        render json: unit, status: 200
    end

    def create
        unit = Unit.create!(unit_params)
        render json: unit,  status: :created
    end

    def update
        unit = Unit.find(params[:id])
        unit.update!(unit_params)
        render json: unit, status: :created
    end

    def destroy
        unit = Unit.find(params[:id])
        unit.destroy
        render json: {}, status: 200
        # head :no_content
    end

    # def dead_units
    #     units = Unit.find(params[:hp])
    #     render json: units unless units.hp <= 0
    # end

    private

    def unit_params
        params.permit(:name, :hp, :move, :attack, :defense, :weapon, :range, :stationery_sprite_blue, :stationery_sprite_red, :attack_sprite, :description, :team_id) 
    end
end