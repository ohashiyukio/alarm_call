class AddDatetimeToAlarms < ActiveRecord::Migration[7.0]
  def change
    add_column :alarms, :alarm_time, :datetime
  end
end
