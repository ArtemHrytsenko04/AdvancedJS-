import { Link } from "react-router-dom";

function Header() {
    const headerStyle = {
        minHeight: '15vh',
        backgroundColor: '#2c3e50'
    }
    const taglineStyle = {
        minHeight: '15vh',
        backgroundColor: '#2c3e50'
    }

    return(
        <>
            <header className='row' style={headerStyle}>
                <div className='col-12 col-md-12 col-lg-8 text-center text-white display-5' style={taglineStyle}>
                    Phone Fix Booking System
                </div>

                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='row'>
                        {/*Button1*/}
                        <Link to="/" className="col-12 col-md-6 col-lg-6 bg-info p-0 m-0 border border-dark text-center text-white" style={{textDecoration: 'none'}}>Home</Link>
                        
                        {/*Button 2*/}
                        <Link to="/advancedJS" className="col-12 col-md-6 col-lg-6 bg-info p-0 m-0 border border-dark text-center text-white" style={{textDecoration: 'none'}}>Extensions</Link>
                    </div>
                </div>


            </header>
        </>
    );
}

export default Header;