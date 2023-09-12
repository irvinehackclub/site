import dayjs from 'dayjs'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export class Announcement {
    constructor (date, title, body) {
      this.date = dayjs(date);
      this.title = title;
      this.body = body;
    }
}