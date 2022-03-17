import Route from '@ember/routing/route';

export default class CategoriesContatsUpdateRoute extends Route {
  model() {
    this.route('contacts', { path: '/contact/:category_id' });
  }
}
