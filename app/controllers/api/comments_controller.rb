class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: "Invalid Params", status: 422
    end
  end

  def index
      @comments = Comment.where(track_id: params[:track_id])
      render json: @comments
  end

  def comment_params
    params.require(:comment).permit(:body,:track_id,:username)
  end
end
