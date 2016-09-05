class FixColumnTitle < ActiveRecord::Migration[5.0]
  def change
 	rename_column :tracks, :title, :cover
   end
end
