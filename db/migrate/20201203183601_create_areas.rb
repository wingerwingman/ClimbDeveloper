class CreateAreas < ActiveRecord::Migration[6.0]
  def change
    create_table :areas do |t|
      t.text :name
      t.text :location
      t.integer :admin_id
      t.text :description
      t.text :getting_there

      t.timestamps
    end
  end
end
