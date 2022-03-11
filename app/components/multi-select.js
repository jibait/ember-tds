import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; //crée un tableau tracked
  selected = []; // crée un tableau d'éléments
  id = 'id'; // crée l'id

  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id'; //on concatène l'identifiant avec l'id
  }

  @action
  change(event) {
    //evenement
    let select = event.target; //appel de l'evenement
    var selectedIds = [...select.selectedOptions].map((option) => option.value); //On récupère les éléments selectionnées
    if (this.args.onChange) {
      //si valeur changée
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0 //on filtre les éléments que s'ils ont été selectionnées
        )
      );
    }
  }
}
