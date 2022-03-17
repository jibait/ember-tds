import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesAddRoute extends Route {

  model(){
    return {};
  }

  setupController(controller){
    controller.set('save', this.save);
  }
  @action save(category){
    let categorie = this.store.createRecord('categorie', category);
    categorie.save().then(() => {
      this.router.transitionTo('contacts');
    });
  }
}
