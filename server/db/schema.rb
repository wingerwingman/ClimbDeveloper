# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_05_174137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "area_admins", force: :cascade do |t|
    t.integer "user_id"
    t.integer "area_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "areas", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.text "directions"
    t.text "gps"
    t.text "country"
    t.text "state"
    t.text "images_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "climbs", force: :cascade do |t|
    t.text "name"
    t.text "fa"
    t.text "date"
    t.text "type"
    t.text "grade"
    t.text "directions"
    t.text "description"
    t.text "gps"
    t.boolean "private"
    t.integer "user_id"
    t.integer "group_id"
    t.text "safety"
    t.text "gear"
    t.text "images_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "area_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "images", force: :cascade do |t|
    t.integer "area_id"
    t.integer "climb_id"
    t.integer "user_id"
    t.text "links"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "share_groups", force: :cascade do |t|
    t.integer "user_id"
    t.integer "area_id"
    t.integer "climb_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shared_users", force: :cascade do |t|
    t.integer "user_id"
    t.integer "area_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ticks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "climb_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "name"
    t.text "dob"
    t.text "def_location"
    t.text "gender"
    t.text "address"
    t.text "country"
    t.text "state"
    t.integer "area_code"
    t.text "language"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
