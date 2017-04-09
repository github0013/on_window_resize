Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home, only: %i[index] do
    collection do
      get :no_debounce
      get :with_debounce
    end
  end

  root to: 'home#index'
end
