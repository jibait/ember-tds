import Abstractroute from './AbstractRoute';
import RSVP from 'rsvp';
import { get, set } from '@ember/object';
export default class OrderRoute extends Abstractroute {
  model(params) {
    let id = params.id_order;
    return RSVP.hash({
      order: this.store.findRecord('order', id, {
        include: 'user,orderdetails.product',
      }),
    });
  }

  setupController(controller, model) {
    set(controller, 'order', get(model, 'order'));
  }
}
