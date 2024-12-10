import { checkAlarms, initializeAudio } from "../javascript/alarm_controller";

// アラームデータをサーバーから受け取る（例として埋め込みデータ）
const alarms = [
  {
    time: "2024-12-02T18:00:00",
    audioPath: "/alarm_1.mp3",
    comment: "時間だよ！"
  },
  // 他のアラームデータ...
];

// 初期化処理
document.addEventListener("DOMContentLoaded", () => {
  console.log("アラームデータ:", alarms);

  // 初期化（音声再生を許可）
  initializeAudio();

  // 1分ごとにアラームをチェック
  setInterval(() => {
    checkAlarms(alarms);
  }, 60000);
});
