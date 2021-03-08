class TicksController < ApplicationController
  before_action :set_tick, only: [:show, :update, :destroy]

  # GET /ticks
  def index
    @ticks = Tick.all

    render json: @ticks
  end

  # GET /ticks/1
  def show
    render json: @tick
  end

  # POST /ticks
  def create
    @tick = Tick.new(tick_params)

    if @tick.save
      render json: @tick, status: :created, location: @tick
    else
      render json: @tick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ticks/1
  def update
    if @tick.update(tick_params)
      render json: @tick
    else
      render json: @tick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ticks/1
  def destroy
    @tick.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tick
      @tick = Tick.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tick_params
      params.require(:tick).permit(:user_id, :climb_id)
    end
end
