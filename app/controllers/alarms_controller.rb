class AlarmsController < ApplicationController
  def index
    @alarms = Alarm.all
    render json: @alarms
  end

  def create
    alarm = Alarm.new(alarm_params)
    if alarm.save
      render json: alarm, status: :created
    else
      render json: alarm.errors, status: :unprocessable_entity
    end
  end

  private

  def alarm_params
    params.require(:alarm).permit(:date, :time, :comment)
  end
end
