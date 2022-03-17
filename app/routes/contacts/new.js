import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import { service } from '@ember/service';

export default class ContactsNewRoute extends Route {
  @service store;
  @service router;

  model() {
    return {};
  }

  setupController(controller) {
    set(controller, 'route', this);
  }

  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => {
      this.router.transitionTo('contacts');
    });
  }

  @action cancelRoute(route) {
    this.router.transitionTo(route);
  }
}
