import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import ContactArray from '../classes/contact-array';
export default class TestNewRoute extends Route {
  @service store;
  model() {
    return new ContactArray(this.store.findAll('contact'));
  }

  @action delete(contact) {
    contact.deleteRecord();
    //contact.save();
  }

  @action saveAll(contacts){
    contacts.forEach((c) => {
      c.save();
    });
  }

  @action cancelAll(contacts){
    contacts.forEach((c) => {
      c.rollbackAttributes();
    });
  }
}
