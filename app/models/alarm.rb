class Alarm < ApplicationRecord
  validates :alarm_time, :comment, presence: true
end
