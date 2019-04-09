class LoanList extends React.Component {
    constructor(props){
        super(props);
        //bind here
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt){
        this.props.clickListener(+evt.target.dataset.idx);
    }
    render(){
        return !this.props.loans||this.props.loans.length==0?(
            <div>
                <h3>Loan List</h3>
                <div className="list-group">
                    <button type="button" className="list-group-item" > NO LOANS ENTERED</button>
                </div>
            </div>
        ):(
            <div>
                <h3>Loan List</h3>
                    <div className="list-group">
                    {this.props.loans.map((loan,idx)=>(
                         <button type="button" className="list-group-item" data-idx={idx}
                         key={idx} onClick={this.handleClick}>{loan.get('title')}</button>
                    ))}
                    </div>
            </div>
        );
    }
}

export default LoanList;