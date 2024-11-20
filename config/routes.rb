Rails.application.routes.draw do
  resources :alarms, only: [:index, :new, :create, :show, :update, :destroy]
end
