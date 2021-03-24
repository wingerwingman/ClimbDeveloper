class CreateSharedUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :shared_users do |t|
      t.integer :user_id
      t.integer :area_id

      t.timestamps
    end
  end
end
