class AreaAdminsController < ApplicationController
  before_action :set_area_admin, only: [:show, :update, :destroy]

  # GET /area_admins
  def index
    @area_admins = AreaAdmin.all

    render json: @area_admins
  end

  # GET /area_admins/1
  def show
    render json: @area_admin
  end

  # POST /area_admins
  def create
    @area_admin = AreaAdmin.new(area_admin_params)

    if @area_admin.save
      render json: @area_admin, status: :created, location: @area_admin
    else
      render json: @area_admin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /area_admins/1
  def update
    if @area_admin.update(area_admin_params)
      render json: @area_admin
    else
      render json: @area_admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /area_admins/1
  def destroy
    @area_admin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_area_admin
      @area_admin = AreaAdmin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def area_admin_params
      params.require(:area_admin).permit(:user_id, :area_id)
    end
end
