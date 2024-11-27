document.addEventListener("DOMContentLoaded", () => {
  function playAlarm(audioPath) {
    const audio = new Audio(audioPath);
    audio.play();
  }

  // アラームデータをサーバーから取得して音声再生
  const alarms = JSON.parse(document.getElementById("alarms-data").textContent);
  const now = new Date();

  alarms.forEach(alarm => {
    const alarmTime = new Date(alarm.time);
    const timeToAlarm = alarmTime - now;

    if (timeToAlarm > 0) {
      setTimeout(() => {
        playAlarm(alarm.audioPath); // サーバーから取得した音声ファイルのパス
      }, timeToAlarm);
    }
  });
});
