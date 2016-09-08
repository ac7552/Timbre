class Comment < ApplicationRecord
  validates :user_id, :body, :track_id, presence:true;
  
end
