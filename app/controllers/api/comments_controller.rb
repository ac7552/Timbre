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



  def comment_params
    params.require(:comment).permit(:body)
  end
end
