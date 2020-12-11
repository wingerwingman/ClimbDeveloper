class Api::V1::CommentsController < Api::V1::ApplicationController
    before_action :set_comment, only: [:destroy]

    def create
        comment = current_user.comments.new(content: params[:newComment], area_id: params[:area_id])

        if comment.save
            render json: { comment: comment }, status: :ok
        else
            render json: { error: comment.errors.message }, status: 422
        end
    end

    def destroy
        if @comment.destroy
            head :no_content
        else
            render json: { error: @comment.errors.message }, status: 422
        end
    end

    private

    def set_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:content, :area_id)
    end
end
