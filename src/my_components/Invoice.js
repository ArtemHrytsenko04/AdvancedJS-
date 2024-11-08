import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    const location = useLocation();
    console.log(location.state);
    const receivedData = location.state.attachedData; 

    if (!receivedData) {
        return <h2>Error! No data is passed on!</h2>
    }

    return(
        <>
            <div style={{minHeight: '60vh'}}>
                {/*Header*/}
                <div className="bg-secondary p-3 row">
                    <h1 className="col-6">Repair Booking</h1>
                    <p className="col-6">Amount Due: <br/><span style={{fontSize: '23px'}}>XYZ</span></p>
                </div>

                <div className="p-3 row">
                    <div className="col-6">
                        <h4>Customer Details: </h4>
                        <p>Customer Type: {receivedData.sharedCustomerType ? "customer" : "business"}</p>
                        <p>Title: {receivedData.customerDetails.title}</p>
                        <p>First Name: {receivedData.customerDetails.firstname} </p>
                        <p>Last Name: {receivedData.customerDetails.lastname}</p>
                    </div>
                    
                    <div className="col-6">
                        <h4>Repair Job</h4>
                        <p>Job Number: xxx</p>
                        <p>Invoice Date: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>

                <hr/> 
                <div className="p-3">
                    <h4>Repair Details: </h4>
                </div>

                <div className="p-3">
                    <h4>Courtesy Loan Device Details: </h4>
                    <div className="mt-2 ms-3 me-3 bg-white">
                        <table className="table table-bordered" style={{width: '40%'}}>
                            <tbody>
                                <tr>
                                    <td>Item</td>
                                    <td>Cost</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-3 row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h4>Total: </h4>
                        <p>Bond: ${receivedData.sharedBond.toFixed(2)}</p>
                    </div>
                </div>

                <hr />

                <div className="p-3 row">
                    <div className="col-6">
                        <p className="fs-5"><strong>Phone Fix Services</strong></p>
                        <p>Address: 501 Gloucester Street <br/>
                        Taradale, Napier 4112</p>
                    </div>
                    <div className="col-6">
                        <p className="fs-5"><strong>Contact Us:</strong></p>
                        <p>Phone: 06 974 8000</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice;