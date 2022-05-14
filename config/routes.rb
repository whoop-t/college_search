Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get 'college-search', to: 'searches#college_search'
    end
  end
end
