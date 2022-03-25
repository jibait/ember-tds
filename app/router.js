import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('employees');
  // eslint-disable-next-line ember/no-capital-letters-in-routes
  this.route('AbstractRoute');
  this.route('autre');
  this.route('board');
  // eslint-disable-next-line ember/routes-segments-snake-case
  this.route('order', { path: 'order/:idOrder' });
});
