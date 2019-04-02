import Events from './events.js';
import Loan from './loan.js'; //part A - Day 1

import LoanList from './loan-list.js';
var loans = [new Loan({
  title: 'Loan X'
}), new Loan({
  title: 'Loan Y'
}), new Loan({
  title: 'Loan Z'
})];
ReactDOM.render(React.createElement(LoanList, {
  loans: loans
}), document.querySelector('.loan-display'));