class CreateClimbs < ActiveRecord::Migration[6.1]
  def change
    create_table :climbs do |t|
      t.text :name
      t.text :fa
      t.text :date
      t.text :type
      t.text :grade
      t.text :directions
      t.text :description
      t.text :gps
      t.boolean :private
      t.integer :user_id
      t.integer :group_id
      t.text :safety
      t.text :gear
      t.text :images_id

      t.timestamps
    end
  end
end
