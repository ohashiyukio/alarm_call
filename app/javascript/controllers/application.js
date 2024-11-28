function playAlarm(audioPath) {
  const audio = new Audio(audioPath);
  audio.play().catch(error => console.error("音声の再生エラー:", error));
}

const alarmTime = new Date("2024-11-27T23:00:00"); // 例: アラーム時間
const now = new Date();
const timeToAlarm = alarmTime.getTime() - now.getTime();

if (timeToAlarm > 0) {
  setTimeout(() => {
    alert("アラームの時間です！音声を再生します。");
    playAlarm("/alarm_1.mp3");
  }, timeToAlarm);
}
