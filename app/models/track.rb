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

class Track < ApplicationRecord
  # validates :title, :track_url, :user_id, presence:true

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
  )

end
