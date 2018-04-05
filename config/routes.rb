Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:create, :show, :update, :destroy, :index] do
      resources :tags, only: [:index]
    end
    resources :users, only: [:create, :show]
    resources :albums, only: [:create, :destroy, :show, :index]
    resources :comments, only: [:create, :destroy, :show, :index]
    resources :tags, only: [:create, :destroy, :show]
    resources :taggings, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end
end
