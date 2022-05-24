Rails.application.routes.draw do
  get 'ads/index'
  get 'ads/edit/:id', to: 'ads#edit'
  post 'ads/edit/:id', to: 'ads#save'
  root to: "ads#index"  
end
