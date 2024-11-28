import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}

const alarms = [
  {
    time: "2024-11-27T23:00:00",
    audioPath: "/alarm_1.mp3",
    comment: "起きる時間です"
  },
  {
    time: "2024-11-28T07:00:00",
    audioPath: "/alarm_2.mp3",
    comment: "会議の準備"
  }
];

// 現在時刻と比較してアラームを設定
const now = new Date();
alarms.forEach(alarm => {
  const alarmTime = new Date(alarm.time);
  const timeToAlarm = alarmTime.getTime() - now.getTime();

  if (timeToAlarm > 0) {
    setTimeout(() => {
      alert(alarm.comment);
      playAlarm(alarm.audioPath);
    }, timeToAlarm);
  } else {
    console.log(`アラーム (${alarm.comment}) は過去の時間です`);
  }
});
