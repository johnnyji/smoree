# == Schema Information
#
# Table name: emails
#
#  id         :integer          not null, primary key
#  body       :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  course_id  :integer
#

class Email < ActiveRecord::Base
end
