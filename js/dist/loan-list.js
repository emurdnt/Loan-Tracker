function LoanList(props) {
  var handleClick = function handleClick(evt) {
    props.clickListener(+evt.target.dataset.idx);
  };

  return !props.loans || props.loans.length == 0 ? React.createElement("div", null, React.createElement("h3", null, "Loan List"), React.createElement("div", {
    className: "list-group"
  }, React.createElement("button", {
    type: "button",
    className: "list-group-item"
  }, " NO LOANS ENTERED"))) : React.createElement("div", null, React.createElement("h3", null, "Loan List"), React.createElement("div", {
    className: "list-group"
  }, props.loans.map(function (loan, idx) {
    return React.createElement("button", {
      type: "button",
      className: "list-group-item",
      "data-idx": idx,
      key: idx,
      onClick: handleClick
    }, loan.get('title'));
  })));
}

export default LoanList;