class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 400
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
  end

  def show
    @album = Album.find(params[:id])
  end

  def index
    @albums = Album.all
  end

  private

  def album_params
    params.require(:album).permit(:title, :description)
  end
end
