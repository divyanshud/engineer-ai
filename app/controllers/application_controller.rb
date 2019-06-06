class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :check_authentication
  skip_before_action :check_authentication, if: -> { controller_name == "application" }
  skip_before_action :check_authentication, if: :devise_controller?
  skip_before_action :verify_authenticity_token
  respond_to :json

  rescue_from CanCan::AccessDenied do | exception |
    render json: {errors: [exception.message]}, status: 401
  end

  protected

  def configure_permitted_parameters
   added_attrs = [:name, :email, :password, :password_confirmation, :remember_me]
   create_added_attrs = [:first_name,:last_name,:email, :password, :password_confirmation, :remember_me,secret_code: [:id,:coded_value]]
   devise_parameter_sanitizer.permit :sign_up, keys: create_added_attrs
   devise_parameter_sanitizer.permit :account_update, keys: added_attrs
 end

  def check_authentication
    render :json => {:error => "You need to sign in or sign up before continuing."}, :status => :forbidden if !user_signed_in?
  end

end
