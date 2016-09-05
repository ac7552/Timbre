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

require 'test_helper'

class PlaylistTrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
