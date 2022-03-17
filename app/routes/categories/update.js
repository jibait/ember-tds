import Route from '@ember/routing/route';

export default class CategoriesUpdateRoute extends Route {

  model() {
    this.route('contacts', { path: '/contact/:category_id' });
  }
}
