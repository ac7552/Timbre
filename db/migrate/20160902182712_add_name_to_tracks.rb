class AddNameToTracks < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :name, :string
  end
end
