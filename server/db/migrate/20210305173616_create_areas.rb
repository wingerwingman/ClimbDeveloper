class CreateAreas < ActiveRecord::Migration[6.1]
  def change
    create_table :areas do |t|
      t.text :name
      t.text :description
      t.text :directions
      t.text :gps
      t.text :country
      t.text :state
      t.text :images_id 

      t.timestamps
    end
  end
end
