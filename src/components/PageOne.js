import { useEffect, useState } from 'react';
export default function PageOne({ setPage }) {
  const [error, setError] = useState({});
  useEffect(() => {
    const pageNumber2 = document.getElementById('page-number-two');
    pageNumber2.classList.remove('active-page-number');
    const pageNumber = document.getElementById('page-number-one');
    pageNumber.classList.add('active-page-number');
  });
  return (
    <>
      <div className="container">
        <form className="form">
          <h1>Personal Info</h1>
          <p>
            Please provide your name, email
            <br /> adress, and phone number.
          </p>
          <div className="label-div">
            <label>Name</label>
            {error.name && <p>{error.name}</p>}
          </div>
          <input
            placeholder="e.g. Stephen King"
            onChange={(e) => {
              if (e.target.value === '') {
                setError({ ...error, name: 'This field is required' });
              } else {
                setError({ ...error, name: null });
              }
            }}
          />
          <div className="label-div">
            <label>Email Adress</label>
            {error.email && <p>{error.email}</p>}
          </div>
          <input
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            onChange={(e) => {
              if (e.target.value === '') {
                setError({ ...error, email: 'This field is required' });
              } else if (!e.target.value.includes('@')) {
                setError({ ...error, email: 'Enter valid email' });
              } else {
                setError({ ...error, email: null });
              }
            }}
          />
          <div className="label-div">
            <label>Phone Number</label>
            {error.phone && <p>{error.phone}</p>}
          </div>
          <input
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => {
              if (e.target.value === '') {
                setError({ ...error, phone: 'This field is required' });
              } else if (isNaN(e.target.value.slice(1))) {
                setError({ ...error, phone: 'Enter valid phone number' });
              } else {
                setError({ ...error, phone: null });
              }
            }}
          />
        </form>
      </div>
      <div className="navigation-bottom" id='navigation-first-page'>
        <button
          className="button"
          onClick={() => {
            if (
              error.name === null &&
              error.email === null &&
              error.phone === null
            ) {
              setPage('2');
            }
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
