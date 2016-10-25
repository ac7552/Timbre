class Api::TracksController < ApplicationController


  def create
    @track = Track.create(track_params)
    @track.user_id = current_user.id
    if @track.save
       render json: @track
    else
        render json: "Invalid Track Attributes",status: 422
    end
  end

  def index
    render json: Track.all
  end

  def all_tracks
    render json: current_user.tracks
  end

  def show
    render json: current_user.tracks.find(params[:id])
  end


  def update
    @track = current_user.tracks.find(params[:id])
    if @track.update_attributes(track_params)
       render json: @track
    else
      render json: "Invalid Track Attributes"
    end
  end

  def destroy
    @track = Track.find_by_id(params[:id])
    @track.delete
    render json: @track
  end



  def track_params
    params.require(:track).permit(:title,:url,:pic_url,:artist,:id)
  end

end
