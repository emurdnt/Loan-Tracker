function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import Events from './events.js';
import Loan from './loan.js'; //part A - Day 1

import LoanList from './loan-list.js';
import LoanForm from './loan-form.js'; //part A-Day 3

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.pickLoan = _this.pickLoan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearLoan = _this.clearLoan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveLoan = _this.saveLoan.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      loans: [],
      currentLoan: undefined
    };
    return _this;
  }

  _createClass(App, [{
    key: "pickLoan",
    value: function pickLoan(idx) {
      this.setState({
        currentLoan: this.state.loans[idx]
      });
    }
  }, {
    key: "clearLoan",
    value: function clearLoan() {
      this.setState({
        currentLoan: undefined
      });
    }
  }, {
    key: "saveLoan",
    value: function saveLoan(loanDetails) {
      var curr = null;

      if (!this.state.currentLoan) {
        curr = new Loan(loanDetails);
        this.setState({
          loans: this.state.loans.concat(curr)
        });
      } else {
        curr = this.state.currentLoan;
        curr.set('title', loanDetails.title);
        curr.set('principal', loanDetails.principal);
        curr.set('rate', loanDetails.rate);
        curr.set('term', loanDetails.term);
      }

      this.setState({
        currentLoan: curr
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "col-sm-6 col-xs-12 loan-control"
      }, React.createElement(LoanForm, {
        submitListener: this.saveLoan,
        resetListener: this.clearLoan,
        loan: this.state.currentLoan
      })), React.createElement("div", {
        className: "col-sm-6 col-xs-12 loan-display"
      }, React.createElement(LoanList, {
        clickListener: this.pickLoan,
        loans: this.state.loans
      })));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('.app-display'));