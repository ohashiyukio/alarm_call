// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

const alarms = [
  <% @alarms.each do |alarm| %>
    {
      time: "<%= alarm.alarm_time.strftime('%Y-%m-%d %H:%M:%S') %>",
      audioPath: "/alarm_<%= alarm.id %>.mp3",
      comment: "<%= alarm.comment %>"
    },
  <% end %>
];

// 現在時刻よりも未来のアラームだけを表示
const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
const futureAlarms = alarms.filter(alarm => alarm.time > now);

// アラームリストを表示
const alarmList = document.getElementById("alarmList");
futureAlarms.forEach(alarm => {
  const alarmItem = document.createElement("div");
  alarmItem.className = "alarm-item";
  alarmItem.innerHTML = `
    <span>${alarm.time} - ${alarm.comment}</span>
    <button onclick="setAlarm()">セット</button>
  `;
  alarmList.appendChild(alarmItem);
});
