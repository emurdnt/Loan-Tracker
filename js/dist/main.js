function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

import Events from './events.js';
import Loan from './loan.js'; //part A - Day 1

import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

function App(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      loans = _useState2[0],
      addLoans = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      currentLoan = _useState4[0],
      setCurrentLoan = _useState4[1];

  var pickLoan = function pickLoan(idx) {
    setCurrentLoan(loans[idx]);
  };

  var clearLoan = function clearLoan() {
    setCurrentLoan(undefined);
  };

  var saveLoan = function saveLoan(loanDetails) {
    var curr = null;

    if (!setCurrentLoan(loans[idx])) {
      curr = new Loan(loanDetails);
      loans = (_readOnlyError("loans"), addLoans(loans.concat(curr)));
    } else {
      curr = currentLoan;
      curr.set('title', loanDetails.title);
      curr.set('principal', loanDetails.principal);
      curr.set('rate', loanDetails.rate);
      curr.set('term', loanDetails.term);
    } //currentLoan = useState(curr);

  };

  return React.createElement("div", null, React.createElement("div", {
    className: "col-sm-6 col-xs-12 loan-control"
  }, React.createElement(LoanForm, {
    submitListener: saveLoan,
    resetListener: clearLoan,
    loan: currentLoan
  })), React.createElement("div", {
    className: "col-sm-6 col-xs-12 loan-display"
  }, React.createElement(LoanList, {
    clickListener: pickLoan,
    loans: loans
  })));
}

ReactDOM.render(React.createElement(App, null), document.querySelector('.app-display'));