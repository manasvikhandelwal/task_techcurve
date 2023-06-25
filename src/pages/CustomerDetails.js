import React, { useState } from 'react';
import './Opportunity.css';
import { FaEye } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const data = [
    {
        date: '6-9-2022',
        name: 'Mrs Dianne Russell',
        contactNumber: '(+33)7 00 55 56 79',
        country: 'Jordan',
        address: '12 The Crescent...',
        transactionId: '3aab1997-18',
        status: 'Applied',
      },
      {
        date: '6-9-2022',
        name: 'Dr Cody Fisher ',
        contactNumber: '(+33)6 55 56 56 33',
        country: 'Kosovo',
        address: '2 New Street ,harrogate..',
        transactionId: '86f78e30-lc',
        status: 'Completed',
      },
      {
        date: '6-9-2022',
        name: 'Dr Arlene McCoy',
        contactNumber: '(+33)6 55 52 72 55',
        country: 'Eritrea',
        address: '787 Mill Lane,Bath,,BA 4..',
        transactionId: 'afb3ba5d-11',
        status: 'In Progress',
      },
      {
        date: '6-9-2022',
        name: 'Mr Guy Hawkins',
        contactNumber: '(+33)7 35 55 45 43',
        country: 'Croatia',
        address: '96 Grange Road..',
        transactionId: '3315816b-3d',
        status: 'Completed',
      },
      {
        date: '6-9-2022',
        name: 'Dr Kristin Watson',
        contactNumber: '(+33)7 00 55 59 27',
        country: 'Gabon',
        address: '25 Alexander Road...',
        transactionId: 'c17687b9-5e',
        status: 'In Progress',
      },
    ];

const CustomerDetails = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  return (
    <div>
    <h1 style={{ color: '#2b78cb' }}>Customer Contact</h1>

      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select a date"
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <div className="data-grid">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Country</th>
              <th>Address</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.contactNumber}</td>
                <td>{item.country}</td>
                <td>{item.address}</td>
                <td>{item.transactionId}</td>
                <td>{item.status}</td>
                <td>
             <button onClick={() => openModal(item)}> 
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedData && (
        <div className="modal">
          <div className="modal-content">
            <h2>Data Details</h2>
            <p>Date: {selectedData.date}</p>
            <p>Name: {selectedData.name}</p>
            <p>Contact Number: {selectedData.contactNumber}</p>
            <p>Country: {selectedData.country}</p>
            <p>Address: {selectedData.address}</p>
            <p>Transaction ID: {selectedData.transactionId}</p>
            <p>Status: {selectedData.status}</p>
             <button onClick={closeModal}>Close</button> 
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
