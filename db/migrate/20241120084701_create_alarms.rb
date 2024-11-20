class CreateAlarms < ActiveRecord::Migration[7.0]
  def change
    create_table :alarms do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.string :comment, null: false
      t.timestamps
    end
  end
end

