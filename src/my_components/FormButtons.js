import React from "react";
import {Link} from 'react-router-dom';
function FormButtons() {
    return(
        <>
             <input type="submit" className="btn me-3 text-dark bg-white" style={{width: '5em'}} value="SUBMIT" />         
             <input type="reset" className="btn me-3 text-dark bg-white" style={{width: '5em'}} value="RESET" />

             <Link to='/faq'>
                <input type="button" className="btn me-3 text-dark bg-white" style={{width: '5em'}} value="FAQ" />
             </Link>  
        </>
    );
}

export default FormButtons;