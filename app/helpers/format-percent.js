import { helper } from '@ember/component/helper';

export default helper(function formatPercent(params) {
  let [value] = params;
  return value * 100 + '%';
});
