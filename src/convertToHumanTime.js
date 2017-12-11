export default function convertToHumanTime(duration) {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / 60000) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}
