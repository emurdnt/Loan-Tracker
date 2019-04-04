function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import Loan from "./loan.js";

var LoanForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanForm, _React$Component);

  function LoanForm(props) {
    var _this;

    _classCallCheck(this, LoanForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoanForm).call(this, props));
    _this.state = {
      loan: new Loan()
    };
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(LoanForm, [{
    key: "handleReset",
    value: function handleReset() {
      console.log('reset..');
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      evt.preventDefault();
      console.log('submitted..');
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      // this.state.loan.set(evt.target.name,evt.target.value);
      switch (evt.target.name) {
        case 'principal':
        case 'term':
          this.state.loan.set(evt.target.name, Math.floor(evt.target.value));
          break;

        case 'rate':
          this.state.loan.set(evt.target.name, evt.target.value / 100);
          break;

        default:
          this.state.loan.set(evt.target.name, evt.target.value);
      }

      this.setState({
        loan: this.state.loan
      });
    }
  }, {
    key: "render",
    value: function render() {
      var payment = this.state.loan.payment().toFixed(2);
      var cost = this.state.loan.cost().toFixed(2);
      return React.createElement("div", null, React.createElement("h3", null, "Loan Entry"), React.createElement("form", {
        onSubmit: this.handleSubmit,
        onReset: this.handleReset
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", null, "Title"), React.createElement("input", {
        type: "text",
        name: "title",
        className: "form-control",
        onChange: this.handleChange,
        id: "loan-title",
        placeholder: "title for the loan",
        value: this.state.loan.title
      })), React.createElement("div", null, React.createElement("label", null, "Principal"), React.createElement("div", {
        className: "input-group"
      }, React.createElement("span", {
        className: "input-group-addon"
      }, "$"), React.createElement("input", {
        type: "number",
        name: "principal",
        pattern: "\\d+",
        onChange: this.handleChange,
        className: "form-control",
        id: "loan-principal",
        placeholder: "amount to borrow",
        "aria-label": "Amount (to the nearest dollar)",
        step: "1",
        value: this.state.loan.principal
      }), React.createElement("span", {
        className: "input-group-addon"
      }, ".00"))), React.createElement("div", null, React.createElement("label", null, "Rate"), React.createElement("div", {
        className: "input-group"
      }, React.createElement("input", {
        type: "number",
        name: "rate",
        step: ".01",
        onChange: this.handleChange,
        className: "form-control",
        id: "loan-rate",
        placeholder: "interest rate",
        "aria-label": "Rate (as a percent)",
        value: +(this.state.loan.rate * 100).toFixed(2)
      }), React.createElement("span", {
        className: "input-group-addon"
      }, "%"))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", null, "Term"), React.createElement("input", {
        type: "number",
        name: "term",
        pattern: "\\d+",
        onChange: this.handleChange,
        className: "form-control",
        id: "loan-term",
        placeholder: "number of periods",
        value: this.state.loan.term
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", null, "Payment"), React.createElement("span", {
        className: "loan-payment",
        id: "loan-payment"
      }, "$", payment), React.createElement("label", null, "Cost"), React.createElement("span", {
        className: "loan-cost",
        id: "loan-cost"
      }, "$", cost)), React.createElement("button", {
        type: "submit",
        className: "btn btn-default"
      }, "Add"), React.createElement("button", {
        type: "reset",
        className: "btn btn-info"
      }, "Clear")));
    }
  }]);

  return LoanForm;
}(React.Component);

export default LoanForm;