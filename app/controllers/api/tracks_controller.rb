class Api::TracksController < ApplicationController


  def create
    @track = Track.create(track_params)
    @track.user_id = current_user.id
    @track.pic_url = "temp"
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


  def edit
    @track = current_user.tracks.find(params[:id])
    if @track.update_attributes(track_params)
       render json: @track
    else
      render json: "Invalid Track Attributes"
    end
  end



  def track_params
    params.require.permit(:track).permit(:title,:track_url)
  end

end
