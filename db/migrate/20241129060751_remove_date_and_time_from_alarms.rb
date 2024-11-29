class RemoveDateAndTimeFromAlarms < ActiveRecord::Migration[7.0]
  def change
    remove_column :alarms, :date, :date
    remove_column :alarms, :time, :time
  end
end
