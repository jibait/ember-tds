export default class Contacts {
  data = [];
  constructor(data) {
    this.data = data;
  }

  get contacts() {
    return this.data.filterBy('isDeleted', false);
  }
  get deleteds() {
    return this.data.filterBy('isDeleted', true);
  }

  get length() {
    return this.data.length;
  }

  get deletedCount() {
    return this.deleteds.length;
  }
}
