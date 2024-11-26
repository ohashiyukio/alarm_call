class AlarmsController < ApplicationController

  def index
    Alarm.where('alarm_time < ?', Time.current).destroy_all
    @alarms = Alarm.all.order(:alarm_time)
  end

  def create
    @alarm = Alarm.new(alarm_params)
    if @alarm.save
      generate_audio(@alarm.comment, @alarm.id) # 音声ファイル生成
      redirect_to alarms_path, notice: 'アラームが保存されました'
    else
      render :new, status: :unprocessable_entity
    end
  end
  
  def generate_audio(comment, id)
    require "google/cloud/text_to_speech"
  
    client = Google::Cloud::TextToSpeech.text_to_speech
    input_text = { text: comment }
    voice = { language_code: "ja-JP", ssml_gender: "NEUTRAL" }
    audio_config = { audio_encoding: "MP3" }
  
    response = client.synthesize_speech(
      input: input_text,
      voice: voice,
      audio_config: audio_config
    )
  
    file_path = Rails.root.join('public', "alarm_#{id}.mp3")
    File.open(file_path, "wb") do |file|
      file.write(response.audio_content)
    end
  
    Rails.logger.info("Audio file created successfully at #{file_path}.")
  end

  def new
    @alarm = Alarm.new
  end

  def alarm_params
    params.require(:alarm).permit(:alarm_time, :comment)
  end

  class CleanupPastAlarmsJob < ApplicationJob
    queue_as :default
  
    def perform
      Alarm.where('alarm_time < ?', Time.current).destroy_all
    end
  end
end

