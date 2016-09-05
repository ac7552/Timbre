# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :integer          not null, primary key
#  playlist_id :integer
#  track_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistTrack < ApplicationRecord
  belongs_to :playlist
  belongs_to :track
end
