Rails.application.routes.draw do
  resources :alarms, only: [:index, :create, :show, :update, :destroy]
end
