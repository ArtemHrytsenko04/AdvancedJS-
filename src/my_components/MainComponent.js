import React, { useState } from 'react';
import FormCourtesyPhone from './FormCourtesyPhone';
import FormCustomerDetails from './FormCustomerDetails';
import JobSheet from './JobSheet';

function MainComponent() {
  const [courtesyBond, setCourtesyBond] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({
    title: 'Mr',
    firstname: '',
    lastname: '',
    street: '',
    suburb: '',
    city: '',
    postcode: '',
    phonenumber: '',
    email: ''
  });

  const handleCourtesyBond = (bond) => {
    setCourtesyBond(bond);
  };

  const handleCustomerDetails = (details) => {
    setCustomerDetails(details);
  };

  return (
    <div>
      <FormCourtesyPhone passDataToParent={handleCourtesyBond} />
      <FormCustomerDetails sendCustomerDetails={handleCustomerDetails} />
      <JobSheet courtesyBond={courtesyBond} customerDetails={customerDetails} />
    </div>
  );
}

export default MainComponent;
