futureAlarms.forEach(alarm => {
  const alarmItem = document.createElement("div");
  alarmItem.className = "alarm-item";
  alarmItem.innerHTML = `
    <span>${alarm.time} - ${alarm.comment}</span>
    <button onclick="playAlarm('${alarm.audioPath}')">再生</button>
  `;
  alarmList.appendChild(alarmItem);
});
