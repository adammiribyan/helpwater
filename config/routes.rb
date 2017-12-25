Rails.application.routes.draw do
  resources :articles
  resources :searches, only: [:create]

  root to: 'articles#index'
end
