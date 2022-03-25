import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";

export default class OrderController extends Controller {
  @tracked order;
  get prepared() {
    let details = this.order.orderdetails;
    let prepares = details.filterBy('prepared',true);
    return prepares;
  }

  get countPrepared() {
    return this.prepared.length;
  }
}
