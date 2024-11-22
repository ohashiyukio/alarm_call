import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

const testAudio = new Audio('/test.mp3');
testAudio.play();

function checkAlarms() {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log("Current time: ", now); // 現在時刻を出力
  alarms.forEach(alarm => {
    console.log("Checking alarm: ", alarm.time); // アラーム時刻を出力
    if (now === alarm.time) {
      console.log("Alarm triggered: ", alarm.comment);
      const audio = new Audio(alarm.audioPath);
      audio.play();
      alert(alarm.comment);
    }
  });
}

