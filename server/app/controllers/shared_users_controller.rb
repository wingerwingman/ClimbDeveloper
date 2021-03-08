class SharedUsersController < ApplicationController
  before_action :set_shared_user, only: [:show, :update, :destroy]

  # GET /shared_users
  def index
    @shared_users = SharedUser.all

    render json: @shared_users
  end

  # GET /shared_users/1
  def show
    render json: @shared_user
  end

  # POST /shared_users
  def create
    @shared_user = SharedUser.new(shared_user_params)

    if @shared_user.save
      render json: @shared_user, status: :created, location: @shared_user
    else
      render json: @shared_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shared_users/1
  def update
    if @shared_user.update(shared_user_params)
      render json: @shared_user
    else
      render json: @shared_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shared_users/1
  def destroy
    @shared_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shared_user
      @shared_user = SharedUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shared_user_params
      params.require(:shared_user).permit(:user_id, :area_id)
    end
end
