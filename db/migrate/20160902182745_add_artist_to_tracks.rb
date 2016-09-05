class AddArtistToTracks < ActiveRecord::Migration[5.0]
  def change
    execute "create extension hstore"
    add_column :tracks, :artist, :hstore
  end
end
