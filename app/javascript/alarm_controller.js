function checkAlarms() {
  const now = new Date();
  console.log("Current time (browser):", now.toISOString()); // 現在時刻を出力
  alarms.forEach(alarm => {
    const alarmTime = new Date(alarm.time);
    console.log("Checking alarm:", alarm.time, "Alarm time (browser):", alarmTime.toISOString());
    if (Math.abs(alarmTime - now) <= 1000) {
      console.log("Alarm triggered for:", alarm.comment);
      const audio = new Audio(alarm.audioPath);
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      alert(alarm.comment);
    }
  });
}
