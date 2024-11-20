function speakMessage(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(utterance);
}

// 例: 5分後に「休憩をとってください」と発話
setTimeout(() => {
  speakMessage("休憩をとってください");
}, 5 * 60 * 1000);

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
