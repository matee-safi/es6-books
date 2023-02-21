import { DateTime } from './datetime.js';

const time = document.querySelector('.time');

export default function currentTime() {
  time.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
