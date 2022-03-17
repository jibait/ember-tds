import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CategoriesRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('category');
  }

  afterModel(model, transition){
    model = this.store.findAll('contact');
    if(model.get('firstObject') != null && transition.targetName==='categories.index') {
      model.get('firstObject').write();
    }
  }
}
