import Events from './events.js';
import Loan from './loan.js';

//part A - Day 1
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

//part A-Day 3
class App extends React.Component{
    constructor(props){
        super(props);

        this.pickLoan = this.pickLoan.bind(this);
        this.clearLoan = this.clearLoan.bind(this);
        this.saveLoan = this.saveLoan.bind(this);
        this.state={
            loans:[],
            currentLoan:undefined
        }
    }
    pickLoan(idx){
        this.setState({
            currentLoan:this.state.loans[idx]
        });
    }
    clearLoan(){
        this.setState({
            currentLoan:undefined
        });
    }
    saveLoan(loanDetails){
        let curr = null;

        if(!this.state.currentLoan){
            curr = new Loan(loanDetails);
            this.setState({
                loans:this.state.loans.concat(curr)
            })
        }
        else{
            curr = this.state.currentLoan;
            curr.set( 'title', loanDetails.title);
            curr.set( 'principal', loanDetails.principal);
            curr.set( 'rate', loanDetails.rate);
            curr.set( 'term', loanDetails.term);
        }

        this.setState({ currentLoan:curr});
    }
    render(){
        return(<div>
            <div className="col-sm-6 col-xs-12 loan-control">
                <LoanForm submitListener={this.saveLoan} resetListener={this.clearLoan} loan={this.state.currentLoan}/>
            </div>
            <div className="col-sm-6 col-xs-12 loan-display">
                <LoanList clickListener={this.pickLoan} loans={this.state.loans}/>
            </div>
        </div>);
    }
}


ReactDOM.render(
   <App/>,
    document.querySelector('.app-display')
);

