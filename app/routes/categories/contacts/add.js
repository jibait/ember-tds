import Route from '@ember/routing/route';

export default class CategoriesContatsAddRoute extends Route {
  model(params){
    let cat = this.modelFpr('categories.contact');
    return { name: '', categorie: cat };
  }

  setupController(controller){
    let model = this.modelFor('categories.contact');
    controller.set('category', model);
  }
}
