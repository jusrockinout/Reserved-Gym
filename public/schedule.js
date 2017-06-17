var dp = new DayPilot.Calendar("dp");

// view
dp.startDate = "2017-06-17";
dp.viewType = "Week";

// event creating
dp.onTimeRangeSelected = function (args) {
  var name = prompt("Enter Reservation Time", "09:00");
  if (!name) return;
  var e = new DayPilot.Event({
    start: args.start,
    end: args.end,
    id: DayPilot.guid(),
    text: name
  });
  dp.events.add(e);
  dp.clearSelection();
};

dp.onEventClick = function(args) {
  alert("clicked: " + args.e.id());
};

dp.init();

dp.events.add(e);
