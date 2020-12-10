class AddAreaReferenceToComments < ActiveRecord::Migration[6.0]
  def change
    add_reference :comments, :area, null: false, foreign_key: true
  end
end
