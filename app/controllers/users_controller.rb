class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = params[:role].present? ? User.with_role(params[:role].parameterize.underscore).order(:first_name,:last_name) : User.all
    # authorize! :read, @users
    render json: @users
  end

  # GET /users/1
  # GET /users/1.json
  def show
    # authorize! :read, @user
    render json: @user
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:id, :first_name,:last_name, :email, :password, :password_confirmation)
    end
end
