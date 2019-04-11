function LoanList(props){
    const handleClick=(evt)=>{
           props.clickListener(+evt.target.dataset.idx);
        }
  
    return(
        !props.loans||props.loans.length==0?(
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
                                {props.loans.map((loan,idx)=>(
                                     <button type="button" className="list-group-item" data-idx={idx}
                                     key={idx} onClick={handleClick}>{loan.get('title')}</button>
                                ))}
                                </div>
                        </div>
        )
    )
}

export default LoanList;