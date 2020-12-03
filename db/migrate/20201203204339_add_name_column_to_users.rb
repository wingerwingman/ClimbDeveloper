class AddNameColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :text
    add_column :users, :dob, :text
    add_column :users, :user_name, :text
    add_column :users, :location, :text
    add_column :users, :gender, :text
  end
end
