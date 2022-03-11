import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params) {
  let [value, symbol] = params;
  return '${value}  ${symbol}';
});
