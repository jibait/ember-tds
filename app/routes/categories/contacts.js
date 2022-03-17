import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class CategoriesContactsRoute extends Route {

@service store;

  model(params) {
    return this.store.findRecord('category', params.category_id);
  }

  setupController(controller, model){
    model = this.modelFor('categories.contact');
    controller.set('category', model);
    controller.set('data', model.get('contacts'));
  }

  willTransition(){

  }

  @action delete(contact){
    contact.deleteRecord();
  }

  @action cancelDeletetion(contacts) {
    contacts.forEach((c) => {
      c.rollbackAttributes();
    });
  }
  @action update(category, contact){

  }

  @action confirmDeletion(contacts){

  }

}
