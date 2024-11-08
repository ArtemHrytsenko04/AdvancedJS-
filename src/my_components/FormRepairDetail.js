import { useState } from "react";
function FormRepairDetail({passDataToParent}) { 

    const updateWarranty = (value) => {
        passDataToParent(value);
    }

    const [purchaseDate, setPurchaseDate] = useState('');
    const [repairDate, setRepairDate] = useState('');
    const [warranty, setWarranty] = useState(false);

    const isValidDate = (dateString) => {
        const date = new Date (dateString);
        return !isNaN(date.getTime());
    };
    
    const handlePurchaseDateChange = (e) => {
        const date = e.target.value;
        setPurchaseDate(date);

        const purchaseDateObj = new Date(date);
        const currentDate = new Date();
        const monthsDifference = (currentDate.getFullYear() - purchaseDateObj.getFullYear()) * (currentDate.getMonth() - purchaseDateObj.getMonth());

        const isUnderWarranty = monthsDifference <= 24;
        setWarranty(isUnderWarranty);
        updateWarranty(isUnderWarranty);
        if (monthsDifference > 24) {
            setWarranty(false);
        }
    };


    const handleRepairDateChange = (e) => {
        const date = e.target.value;
        setRepairDate(date);
    };

    const isWarrantyDisabled = () => {
        if (!isValidDate(purchaseDate)) {
          return true; // Disable if the purchase date is invalid
        }
        const purchaseDateObj = new Date(purchaseDate);
        const currentDate = new Date();
        const monthsDifference = (currentDate.getFullYear() - purchaseDateObj.getFullYear()) * 12 + 
                                 (currentDate.getMonth() - purchaseDateObj.getMonth());
        return monthsDifference > 24;
    };


    const isPurchaseDateValid = isValidDate(purchaseDate) && new Date(purchaseDate) <= new Date();
    const isRepairDateValid = isValidDate(repairDate) && new Date(repairDate) > new Date(purchaseDate) && new Date(repairDate) > new Date();

    return(
    <>         
        <h2>Repair Details</h2>         
        <div className="row mt-1">             
            <label class="col-12 col-md-12 col-lg-4">Purchase Date *</label>             
            <input class="col-12 col-md-12 col-lg-7" type="date" id="purchaseDate" value={purchaseDate} onChange={handlePurchaseDateChange} required/>    
            {!isPurchaseDateValid && <p className="error-text">Invalid Purchase Date</p>}     
        </div>               
        
        <div class="row mt-1">             
            <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>             
            <input className="col-12 col-md-12 col-lg-7" type="date" id="repairDate" value={repairDate} onChange={handleRepairDateChange} required/>
            {!isRepairDateValid && <p className="error-text">Invalid Repair Date. It must be after today and late than the purchase date!</p>}      
        </div>

        <div className="row">             
            <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">                 
                <legend className="col-11 float-none w-auto">Under Warranty</legend>                 
                <div>                     
                    <label className="col-12 col-md-12 col-lg-4">Warranty</label>                     
                    <input type="checkbox" id="warranty" checked={warranty} onChange={(event) => updateWarranty(event.target.checked)} disabled={isWarrantyDisabled()}/>                                      
                </div>             
            </fieldset>                      
        </div>

        <div className="row mt-1">             
            <label className="col-12 col-md-12 col-lg-4">IMEI *</label>             
            <input className="col-12 col-md-12 col-lg-7" type="number" id="imei" pattern="\d{15}" required />         
        </div>

        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Make *</label>
            <select className="col-12 col-md-12 col-lg-7" required>
                <option value='Apple'>Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="SomethingElse">Something Else</option>
                <option value="Huawei">Huawei</option>
                <option value="Xiaomi">Xiaomi</option>
            </select>
        </div>

        <div className="row mt-1">             
            <label className="col-12 col-md-12 col-lg-4">Model Number </label>             
            <input className="col-12 col-md-12 col-lg-7" type="number" id="modelnumber" />         
        </div>
            
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Fault Category *</label>
            <select className="col-12 col-md-12 col-lg-7" required >
                <option value='Screen'>Screen</option>
                <option value="Battery">Battery</option>
                <option value="Speaker">Speaker</option>
                <option value="Camera">Camera</option>
                <option value="FrontCamera">Front Camera</option>
            </select>
        </div>

        <div class="row mt-3">
            <label for="Description" class="form-label">Description *</label>
            <textarea class="form-control col-12 col-md-12 col-lg-7" name="Description" id="Description" rows="3" required></textarea>
        </div>
        
    </>);
}

export default FormRepairDetail;