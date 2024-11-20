class AlarmsController < ApplicationController
  def index
    @alarms = Alarm.all
  end

  def create
    @alarm = Alarm.new(alarm_params)
    if @alarm.save
      redirect_to alarms_path, notice: 'アラームが保存されました'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def generate_audio(comment, id)
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
    "Audio file created successfully."
  end
  

  def new
    @alarm = Alarm.new
  end

  def update
  end

  def alarm_params
    params.require(:alarm).permit(:alarm_time, :comment)
  end
end
