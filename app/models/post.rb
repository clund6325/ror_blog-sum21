class Post < ApplicationRecord
  belongs_to :blog
  validates :tile, :author, :body, presence: true

end
