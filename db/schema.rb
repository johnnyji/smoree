# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150815205241) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "profile_picture_url"
    t.string   "banner_picture_url"
    t.integer  "accountable_id"
    t.string   "accountable_type"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "course_registrations", force: :cascade do |t|
    t.integer  "student_id"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "course_registrations", ["course_id"], name: "index_course_registrations_on_course_id", using: :btree
  add_index "course_registrations", ["student_id"], name: "index_course_registrations_on_student_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "title"
    t.string   "location"
    t.string   "summary"
    t.string   "description"
    t.string   "slug"
    t.string   "banner_picture_url"
    t.integer  "latitude"
    t.integer  "longitude"
    t.integer  "welcome_email_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.integer  "instructor_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "courses", ["instructor_id"], name: "index_courses_on_instructor_id", using: :btree

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "emails", force: :cascade do |t|
    t.string   "sender_email"
    t.string   "recepient_emails",              array: true
    t.string   "subject"
    t.text     "body"
    t.integer  "course_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "emails", ["course_id"], name: "index_emails_on_course_id", using: :btree
  add_index "emails", ["sender_email"], name: "index_emails_on_sender_email", using: :btree

  create_table "instructors", force: :cascade do |t|
    t.text     "bio"
    t.integer  "subscription_status"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "students", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
  end

  add_foreign_key "course_registrations", "courses"
  add_foreign_key "course_registrations", "students"
end
