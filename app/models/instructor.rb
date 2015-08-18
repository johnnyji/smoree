class Instructor < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy
  has_many :courses, dependent: :destroy

  scope :with_associations, -> { includes(:account, { courses: :students }) }

  def create_with_account!(account_params)
    ActiveRecord::Base.transaction do
      self.save!
      self.create_account!(account_params)
    end
  end

end
