class Comment < ApplicationRecord
  validates :user_id, :body, :track_id, presence:true;

  belongs_to(
  :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: "User"
  )

  belongs_to(
  :track,
  primary_key: :id,
  foreign_key: :track_id,
  class_name: "Track"
  )
end
