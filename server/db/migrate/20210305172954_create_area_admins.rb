class CreateAreaAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :area_admins do |t|
      t.integer :user_id
      t.integer :area_id

      t.timestamps
    end
  end
end
