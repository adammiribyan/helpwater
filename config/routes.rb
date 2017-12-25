Rails.application.routes.draw do
  resources :articles

  resources :searches, only: [:index, :create] do
    delete :destroy_all, on: :collection
  end

  root to: 'articles#index'
end
