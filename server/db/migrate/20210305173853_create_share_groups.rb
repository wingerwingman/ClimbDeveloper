class CreateShareGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :share_groups do |t|
      t.integer :user_id
      t.integer :area_id
      t.integer :climb_id

      t.timestamps
    end
  end
end
