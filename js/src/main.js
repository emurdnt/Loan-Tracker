import Events from './events.js';
import Loan from './loan.js';

//part A - Day 1
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

function App(props){
    const[loans, addLoans] = useState([]);
    const[currentLoan,setCurrentLoan] = useState(undefined);

    const pickLoan = (idx) =>{
        setCurrentLoan(loans[idx]);
    }

    const clearLoan = () =>{
       setCurrentLoan(undefined);
    }

    const saveLoan = (loanDetails) =>{
        let curr= null
        if(!setCurrentLoan(loans[idx])){
                        curr = new Loan(loanDetails);
                        loans = addLoans(loans.concat(curr));
                    }
                    else{
                        curr = currentLoan;
                        curr.set( 'title', loanDetails.title);
                        curr.set( 'principal', loanDetails.principal);
                        curr.set( 'rate', loanDetails.rate);
                        curr.set( 'term', loanDetails.term);
                    }
            
        //currentLoan = useState(curr);
    }
    return(<div>
          <div className="col-sm-6 col-xs-12 loan-control">
              <LoanForm submitListener={saveLoan} resetListener={clearLoan} loan={currentLoan}/>
          </div>
          <div className="col-sm-6 col-xs-12 loan-display">
              <LoanList clickListener={pickLoan} loans={loans}/>
          </div>
      </div>)
    
}


ReactDOM.render(
   <App/>,
    document.querySelector('.app-display')
);

