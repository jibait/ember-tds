import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; //definit les paramètres du helper
  let id = prop || 'id'; //variable id qui concatène la variable prop avec la chaine de caractères 'id'
  return items.filterBy(id, value[id]).length > 0; //vérifie si un item existe
});
