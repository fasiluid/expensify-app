import React from "react"; 
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, index, description, amount, createdAt, note }) => (
    <div>
        <h3>
            {index} ) 
            <Link to={`/edit/${id}`}>
                {description} : {id}
            </Link>    
        </h3>
        <p>{amount} - {createdAt}</p>
        {note && <p>{note}</p>}
    </div>
)

export default ExpenseListItem;
