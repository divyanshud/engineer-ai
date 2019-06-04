class SecretCodesController < ApplicationController
  before_action :set_secret_code, only: [:show, :edit, :update, :destroy]

  # GET /secret_codes
  def index
    @secret_codes = SecretCode.all
    authorize! :read, @secret_codes
    render json: @secret_codes
  end

  # POST /secret_codes
  def bulk_generate
    SecretCode.bulk_create(secret_code_params[:count].to_i)
    authorize! :read, @secret_codes
    @secret_codes = SecretCode.all
    render json: @secret_codes
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_secret_code
      @secret_code = SecretCode.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def secret_code_params
      params.permit(:id,:user_id,:count)
    end
end
