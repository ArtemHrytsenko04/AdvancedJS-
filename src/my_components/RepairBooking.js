import React, { useState } from "react";
import FormCustomerDetails from "./FormCustomerDetails";
import FormCourtesyPhone from "./FormCourtesyPhone";
import JobSheet from "./JobSheet";

function RepairBooking() {
  const [customerDetails, setCustomerDetails] = useState({});
  const [courtesyPhoneDetails, setCourtesyPhoneDetails] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    amountDue: 350.75,
    deviceName: "Samsung Galaxy",
    modelNumber: "SM-G950F",
    faultCategory: "Battery Replacement",
    warranty: true,
    baseCost: 305.0,
    serviceFee: 20.0,
    GST: 25.75,
    total: 350.75,
  });

  return (
    <div>
      <FormCustomerDetails
        sendCustomerDetails={(data) => setCustomerDetails(data)}
      />
      <FormCourtesyPhone
        sendCourtesyPhoneDetails={(data) => setCourtesyPhoneDetails(data)}
      />
      <JobSheet
        customerDetails={customerDetails}
        courtesyPhoneDetails={courtesyPhoneDetails}
        jobDetails={jobDetails}
      />
    </div>
  );
}

export default RepairBooking;
