import Service from '@ember/service';
import { dProducts, dPromos } from 'tp2/data/data';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let call = (s, item) => s + item.price;
    return this.activeServices.reduce(call, 0);
  }
}
