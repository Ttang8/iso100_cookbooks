class Api::PhotosController < ApplicationController

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render "api/photos/show"
  end

  def index
    if params[:tag_id]
      tag = Tag.find(params[:tag_id])
      @photos = tag.photos
    else
      @photos = Photo.all
    end
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :album_id, :image_url)
  end
end
