Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :servers, only: [:index]
      resources :direct_messages, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :show, :update, :destroy] do
      resources :users, only: [:index]
      resources :channels, only: [:index]
    end
    resources :memberships, only: [:show, :create, :destroy]

    resources :channels, only: [:show, :create, :update, :destroy] do
      resources :messages, only: [:index]
    end

    resources :direct_messages, only: [:create, :show, :destroy] do 
      resources :messages, only: [:index]
    end

    resources :messages, only: [:create, :update, :destroy]
    
    get '/explore/servers', to: 'servers#explore', as: 'servers_explore'
    get '/all/channels', to: 'channels#all', as: 'channels_all'
  end

  root "static_pages#root"

  mount ActionCable.server, at: '/cable'
end
