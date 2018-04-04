# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :photo

  def time
    seconds = (Time.now.utc - self.created_at).floor
    minutes = (seconds/60).floor
    hours = (minutes/60).floor
    days = (hours/24).floor
    months = (days/30).floor
    years = (months/12).floor

    if seconds < 60
      return "#{seconds}s ago"
    elsif minutes < 60
      return "#{minutes}m ago"
    elsif hours < 24
      return "#{hours}h ago"
    elsif days < 30
      return "#{days}d ago"
    elsif months < 12
      return "#{months}m ago"
    else
      return "#{years}y ago"
    end
  end

end
