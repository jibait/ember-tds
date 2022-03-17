import EmberRouter from '@ember/routing/router';
import config from 'ember-tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contacts', function () {
    this.route('new');
    this.route('update', { path: 'update/:contact_id' });
  });
  this.route('categories', function () {
    this.route('add');
    this.route('update');
    this.route('contacts', { path: '/contact/:category_id' });
    this.route('contacts', function () {
      this.route('add');
      this.route('update');
      this.route('contacts', { path: '/contact/:contact_id' });
    });
  });
});
