class ShareGroupsController < ApplicationController
  before_action :set_share_group, only: [:show, :update, :destroy]

  # GET /share_groups
  def index
    @share_groups = ShareGroup.all

    render json: @share_groups
  end

  # GET /share_groups/1
  def show
    render json: @share_group
  end

  # POST /share_groups
  def create
    @share_group = ShareGroup.new(share_group_params)

    if @share_group.save
      render json: @share_group, status: :created, location: @share_group
    else
      render json: @share_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /share_groups/1
  def update
    if @share_group.update(share_group_params)
      render json: @share_group
    else
      render json: @share_group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /share_groups/1
  def destroy
    @share_group.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_share_group
      @share_group = ShareGroup.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def share_group_params
      params.require(:share_group).permit(:user_id, :area_id, :climb_id)
    end
end
