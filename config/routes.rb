Rails.application.routes.draw do
  devise_for :users,:controllers => {:registrations => "users/registrations"}
  resources :secret_codes, only: [:index]
  post 'bulk-generate', to: 'secret_codes#bulk_generate'
  root "application#index"
end
