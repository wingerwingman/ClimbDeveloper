class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.integer :area_id
      t.integer :climb_id
      t.integer :user_id
      t.text :links

      t.timestamps
    end
  end
end
