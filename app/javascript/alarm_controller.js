export function checkAlarms(alarms) {
  const now = new Date();

  alarms.forEach(alarm => {
    const alarmTime = new Date(alarm.time);

    // 時間の比較（秒やミリ秒を無視）
    if (
      now.getFullYear() === alarmTime.getFullYear() &&
      now.getMonth() === alarmTime.getMonth() &&
      now.getDate() === alarmTime.getDate() &&
      now.getHours() === alarmTime.getHours() &&
      now.getMinutes() === alarmTime.getMinutes()
    ) {
      console.log("Alarm triggered:", alarm.comment);

      // 音声を再生
      const audio = new Audio(alarm.audioPath);
      audio.play()
        .then(() => {
          console.log("音声再生成功:", alarm.comment);
        })
        .catch(err => {
          console.error("音声再生エラー:", err);
        });
    }
  });
}

// 無音ファイルを使った初期化処理
export function initializeAudio() {
  const dummyAudio = new Audio();
  dummyAudio.muted = true;
  dummyAudio.play()
    .then(() => {
      console.log("音声再生が許可されました");
    })
    .catch(err => {
      console.error("音声再生の初期化に失敗しました:", err);
    });
}
