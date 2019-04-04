import Events from './events.js';
import Loan from './loan.js';

//part A - Day 1
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';
let loans=[
    new Loan({
        title:'Loan X'
    }),
    new Loan({
        title:'Loan Y'
    }),
    new Loan({
        title:'Loan Z'
    })

];


ReactDOM.render(
    <LoanList loans={loans}/>,
    document.querySelector('.loan-display')
);

ReactDOM.render(
    <LoanForm />,
    document.querySelector('.loan-control')
);