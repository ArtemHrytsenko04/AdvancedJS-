import React from 'react';

function JobSheet({ courtesyBond, customerDetails }) {
  return (
    <div>
      <h2>Repair Booking Job Sheet</h2>
      {/* Customer Details */}
      <section>
        <h4>Customer Information</h4>
        <p>Title: {customerDetails.title}</p>
        <p>First Name: {customerDetails.firstname}</p>
        <p>Last Name: {customerDetails.lastname}</p>
        <p>Street: {customerDetails.street}</p>
        <p>Suburb: {customerDetails.suburb}</p>
        <p>City: {customerDetails.city}</p>
        <p>Post Code: {customerDetails.postcode}</p>
        <p>Phone Number: {customerDetails.phonenumber}</p>
        <p>Email: {customerDetails.email}</p>
      </section>

      {/* Courtesy Phone Details */}
      <section>
        <h4>Courtesy Phone Information</h4>
        <p>Total Bond Amount: ${courtesyBond}</p>
      </section>
    </div>
  );
}

export default JobSheet;
