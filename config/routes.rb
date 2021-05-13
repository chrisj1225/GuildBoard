Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :servers, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :update, :destroy] do
      resources :users, only: [:index]
    end
    resources :memberships, only: [:create, :destroy]
  
    get '/servers/explore', to: 'servers#explore', as: 'servers_explore'
  end

  root "static_pages#root"
end
