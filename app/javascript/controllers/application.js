function playAlarm(audioPath) {
  const audio = new Audio(audioPath);
  audio.play();
}

// アラーム時間に音声を再生
const alarmTime = "2024-11-20T10:30:00"; // 例: アラーム時間
const now = new Date();
const timeToAlarm = new Date(alarmTime) - now;

if (timeToAlarm > 0) {
  setTimeout(() => {
    playAlarm("/alarm_1.mp3"); // サーバーから取得した音声ファイルのパス
  }, timeToAlarm);
}
