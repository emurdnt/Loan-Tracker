import Loan from "./loan.js";

class LoanForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            loan:new Loan()
        };

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleReset(){
        console.log('reset..');
    }
    handleSubmit(evt){
        evt.preventDefault();
        console.log('submitted..');
    }
    handleChange(evt){
        // this.state.loan.set(evt.target.name,evt.target.value);
        switch(evt.target.name){
            case 'principal':
            case 'term':
                this.state.loan.set(evt.target.name, Math.floor( evt.target.value))
                break;
            case 'rate':
                this.state.loan.set(evt.target.name, evt.target.value/100);
                break;
            default:
                this.state.loan.set(evt.target.name, evt.target.value);
        }
        this.setState({
            loan: this.state.loan
        });
    }
    render(){
        const payment = this.state.loan.payment().toFixed(2);
        const cost = this.state.loan.cost().toFixed(2);
        return(
            <div>
                  <h3>Loan Entry</h3>
                    <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" name="title" className="form-control" onChange={this.handleChange} id="loan-title" placeholder="title for the loan" value={this.state.loan.title}></input>
                        </div>
                        <div>
                            <label>Principal</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="number" name="principal" pattern="\d+" onChange={this.handleChange} className="form-control" id="loan-principal" placeholder="amount to borrow" aria-label="Amount (to the nearest dollar)" step="1" value={this.state.loan.principal}></input>
                                <span className="input-group-addon">.00</span>
                            </div>
                        </div>
                        <div>
                            <label>Rate</label>
                            <div className="input-group">
                                <input type="number" name="rate" step=".01" onChange={this.handleChange} className="form-control" id="loan-rate" placeholder="interest rate" aria-label="Rate (as a percent)" value={(+(this.state.loan.rate*100).toFixed(2))}></input>
                                <span className="input-group-addon">%</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Term</label>
                            <input type="number" name="term" pattern="\d+" onChange={this.handleChange} className="form-control" id="loan-term" placeholder="number of periods" value={this.state.loan.term}></input>
                        </div>
                        <div className="form-group">
                            <label>Payment</label>
                            <span className="loan-payment" id="loan-payment">${payment}</span>
							<label >Cost</label>
                            <span className="loan-cost" id="loan-cost">${cost}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Add</button>
                        <button type="reset" className="btn btn-info">Clear</button>
                    </form>
            </div>
        );
    }
}

export default LoanForm;