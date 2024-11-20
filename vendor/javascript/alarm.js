require "google/cloud/text_to_speech"

def generate_audio(message)
  client = Google::Cloud::TextToSpeech.text_to_speech
  input_text = { text: message }
  voice = { language_code: "ja-JP", ssml_gender: "NEUTRAL" }
  audio_config = { audio_encoding: "MP3" }

  response = client.synthesize_speech(
    input: input_text,
    voice: voice,
    audio_config: audio_config
  )

  File.open("output.mp3", "wb") do |file|
    file.write(response.audio_content)
  end
  "Audio file created successfully."
end
