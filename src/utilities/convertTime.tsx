const periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const formatDate = (milliseconds: number) => {
  const time = new Date(milliseconds);
  return `${monthNames[time.getUTCMonth() + 1]} ${time.getUTCDate()}, ${time.getUTCFullYear()}`;
}

export const convertTime = (milliseconds: number) => {
  var diff = Date.now() - milliseconds;
  if (diff > periods.month) {
    return formatDate(milliseconds);
  } else if (diff > periods.week) {
    return Math.floor(diff / periods.week) + "w ago";
  } else if (diff > periods.day) {
    return Math.floor(diff / periods.day) + "d ago";
  } else if (diff > periods.hour) {
    return Math.floor(diff / periods.hour) + "h ago";
  } else if (diff > periods.minute) {
    return Math.floor(diff / periods.minute) + "m ago";
  }
  return "Just now";
}
