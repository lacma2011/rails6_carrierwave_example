class AdsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    @ads = Ad.all
  end

  def edit
    @ad = Ad.find(params[:id])
  end

  def save
    # update record
    id = params[:id]
    title = params[:title]
    image_name = params[:image]

    # logger.debug "****"
    # file_data = params[:image]
    # logger.debug file_data.tempfile.inspect

    file_data = params[:image].tempfile
    file_contents = file_data.read
    mounted_as = 'image'

    ad = Ad.find_by(id: id)
    uploader = ImageUploader.new(ad, mounted_as)
    uploader.store!(params[:image])

    Ad.find_by(id: id)&.update_attributes(title: title, image: uploader)

    # redirect back to "edit"
    current_route = "/ads/edit/" + id.to_s 
    redirect_to current_route and return
  end
end
