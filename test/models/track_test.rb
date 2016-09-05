# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  pic_url    :string           not null
#  track_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  artist     :hstore
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
