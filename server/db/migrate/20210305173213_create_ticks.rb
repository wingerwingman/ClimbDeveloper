class CreateTicks < ActiveRecord::Migration[6.1]
  def change
    create_table :ticks do |t|
      t.integer :user_id
      t.integer :climb_id

      t.timestamps
    end
  end
end
