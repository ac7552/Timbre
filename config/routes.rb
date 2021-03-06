Rails.application.routes.draw do
	root to: 'static_pages#root'
	namespace :api, defaults: {format: :json} do
		resources :users
		resources :tracks
		resources :comments
		resource :session, only: [:create,:destroy]
	end
end
