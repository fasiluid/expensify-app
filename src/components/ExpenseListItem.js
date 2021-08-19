import React from "react"; 
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, index, description, amount, createdAt, note }) => (
    <div>
        <h3>
            {index} ) 
            <Link to={`/edit/${id}`}>
                {description} 
            </Link>    
        </h3>
        <p>{numeral(amount / 100).format('$0,0.00')}</p>
        <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        {note && <p>{note}</p>}
    </div>
)

export default ExpenseListItem;
