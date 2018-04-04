class Api::TagsController < ApplicationController
  def create
    if Tag.find_by(name: params[:tag][:name])
      @findtag = Tag.find_by(name: params[:tag][:name])
      @tagging = Tagging.new(photo_id: params[:tag][:photo_id], tag_id: @findtag.id)
      if !@tagging.save
        render json: @tagging.errors.full_messages, status: 400
      end
    else
      @tag = Tag.new(name: params[:tag][:name])
      if @tag.save
        @tagging = Tagging.new(photo_id: params[:tag][:photo_id], tag_id: @tag.id)
        if !@tagging.save
          render json: @tagging.errors.full_messages, status: 400
        end
      else
        render json: @tag.errors.full_messages, status: 400
      end
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def index
    if params[:photo_id]
      photo = Photo.find(params[:photo_id])
      @tags = photo.tags
    else
      @tags = Tag.all
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end
