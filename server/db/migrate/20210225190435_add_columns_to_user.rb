class AddColumnsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :text
    add_column :users, :dob, :text
    add_column :users, :def_location, :text
    add_column :users, :gender, :text
    add_column :users, :address, :text
    add_column :users, :state, :text
    add_column :users, :area_code, :integer
    add_column :users, :language, :text
  end
end
