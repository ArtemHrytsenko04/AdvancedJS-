import { useState } from "react";




function FormCost(props) {

    const [bond, setBond] = useState('0');
    const [serviceFee, setServiceFee] = useState('0');

    const total = parseFloat(bond) + parseFloat(serviceFee);

    const gst = total * 0.15;

    const totalWithGst = total + gst;

    return(
        <>
            <div className="container">
                <h2>Cost</h2>

                <div className="row mt-3 ms-3">             
                    <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>             
                    <input className="col-12 col-md-12 col-lg-7" type="number" id="bond" value={props.sharedPropBond} />         
                </div>

                <div className="row mt-1  ms-3">             
                    <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>             
                    <input className="col-12 col-md-12 col-lg-7" type="number" id="serviceFee" value={props.sharedPropWarranty ? 0 : 85} onChange={(e) => setServiceFee(e.target.value)} onlyread />         
                </div>

                <div class="row mt-1  ms-3">             
                    <label className="col-12 col-md-12 col-lg-4">Total ($)</label>             
                    <input className="col-12 col-md-12 col-lg-7" type="number" id="totalFee" value={total.toFixed(2)} readonly />         
                </div>

                <div class="row mt-1  ms-3">             
                    <label className="col-12 col-md-12 col-lg-4">GST </label>             
                    <input className="col-12 col-md-12 col-lg-7" type="number" id="GST" value={gst.toFixed(2)} readonly />         
                </div> 

                <div class="row mt-1  ms-3">             
                    <label className="col-12 col-md-12 col-lg-4">Total GST ($) </label>             
                    <input className="col-12 col-md-12 col-lg-7" type="number" id="totalGST" value={totalWithGst.toFixed(2)} readonly />         
                </div> 
            </div>
        </>
    );
}

export default FormCost;