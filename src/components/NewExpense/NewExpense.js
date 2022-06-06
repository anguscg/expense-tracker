

import "./NewExpense.css"

function NewExpense() {

const titleChangeHandler = (e) => {
    console.log(e.target.value);
};


    return (
        
        <div className='new-expense'>
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01'/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                            <input type="date" min='2019-01-01' step='2025-12-31'/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
        
    )
}

export default NewExpense