export function calculateTimeDiff(time) {
  const now = new Date().getTime();
  const mins = Math.round((now - time) / (60 * 1000));
  const hours = Math.round(mins / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  if (months > 0) {
    return `${months} ${(months === 1) ? 'MONTH' : 'MONTHS'} AGO`;
  }
  if (days > 0) {
    return `${days} ${(days === 1) ? 'DAY' : 'DAYS'} AGO`;
  }
  if (hours > 0) {
    return `${hours} ${(hours === 1) ? 'HOUR' : 'HOURS'} AGO`;
  }
  if (mins > 0) {
    return `${mins} ${(mins <= 1) ? 'MINUTE' : 'MINUTES'} AGO`;
  }
}
