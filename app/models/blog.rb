class Blog < ApplicationRecord
  has_many :posts
  validate :title, :category, presence: true
end
