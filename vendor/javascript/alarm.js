function speakMessage(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(utterance);
}

// 例: 5分後に「休憩をとってください」と発話
setTimeout(() => {
  speakMessage("休憩をとってください");
}, 5 * 60 * 1000);
