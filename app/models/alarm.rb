class Alarm < ApplicationRecord
  validates :date, :time, :comment, presence: true
end
