import { useState, useEffect } from "react";

function FormCustomerDetails ({passDataToParent, sendCustomerDetails}) {

    const [type, setType] = useState({customer: "checked", business: ""});
    const updateCustomerType = (event) => {
        if (event.target.value === "customer") {
            passDataToParent(true);
            setType({customer: true, business: false});
        } else {
            passDataToParent(false);
            setType({customer: false, business: true});
        }
    }
 
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCustomerDetails({...customerDetails, ...{[name]: value}});
    }

    useEffect(() =>{
        sendCustomerDetails(customerDetails);
        
    }, [customerDetails]);

    return(
        <>
            <h2 className="#">Customer Detail</h2>

            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">Customer Type* </legend>

                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Customer</label>
                        <input type="radio" id="customerType" name="customer-type" value='customer' checked={type.customer} onChange={(event) => updateCustomerType(event)}></input>
                    </div>

                    <div>
                        <label className="col-12 col-md-12 col-lg-4">Business</label>
                        <input type="radio" id="BusinessType" name="customer-type" value="business" checked={type.business} onChange={(event) => updateCustomerType(event)}/>
                    </div>
</fieldset>
            </div>

            {/*Details*/}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Title *</label>
                <select className="col-12 col-md-12 col-lg-7" defaultValue='Mr' name="title" onChange={handleChange} required>
                    <option value='Mr'>Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">First Name *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='fname' pattern="[A-Za-z\s\-]+" name="firstname" onChange={handleChange} required></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Last Name *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='lname' pattern="[A-Za-z\s\-]+" name="lastname" onChange={handleChange} required></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Street *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='street' required></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='suburb'></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='city' required></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Post Code</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='postcode' pattern="\d{4}"></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Phone Number *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='phonenumber' pattern="[\d\s\(\)\-\+]+" required></input>
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email *</label>

                <input className="col-12 col-md-12 col-lg-7" type="text" id='email' required></input>
            </div>
        </>);
}

export default FormCustomerDetails;