class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render "api/comments/show"
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    @comments = Comment.all
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end
