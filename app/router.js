import EmberRouter from '@ember/routing/router';
import config from 'td4/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contacts', function () {
    this.route('new');
    this.route('update', {path: 'update/:contact_id'});
  });
});
