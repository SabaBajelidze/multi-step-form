import { useEffect } from 'react';
export default function PageOne({ setPage }) {
  useEffect(() => {
    const pageNumber2 = document.getElementById('page-number-two');
    pageNumber2.classList.remove('active-page-number')
    const pageNumber = document.getElementById('page-number-one');
    pageNumber.classList.add('active-page-number')
  })
  return (
    <>
      <div className="form-wrapper">
        <div className="form">
          <h1>Personal Info</h1>
          <p>
            Please provide your name, email
            <br /> adress, and phone number.
          </p>
          <label>Name</label>
          <input placeholder="e.g. Stephen King" />
          <label>Email Address</label>
          <input placeholder="e.g. stephenking@lorem.com" />
          <label>Phone Number</label>
          <input placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
      <button className='button' onClick={() => {
        setPage('2');
      }}>Next Step</button>
    </>
  );
}
