import { useEffect } from 'react';

export default function PageFour({ setPage, terms }) {
  useEffect(() => {
    const pageNumber3 = document.getElementById('page-number-three');
    pageNumber3.classList.remove('active-page-number');
    const pageNumber4 = document.getElementById('page-number-four');
    pageNumber4.classList.add('active-page-number');
  });
  console.log(terms);
  let fee = 0;
  if (terms.duration === 'monthly') {
    switch (terms.type) {
      case 'arcade':
        fee = '$9/mo';
        break;
      case 'advanced':
        fee = '$12/mo';
        break;
      case 'pro':
        fee = '$15/mo';
        break;
    }
  } else if (terms.duration === 'yearly') {
    switch (terms.type) {
      case 'arcade':
        fee = '$90/yr';
        break;
      case 'advanced':
        fee = '$120/yr';
        break;
      case 'pro':
        fee = '$150/yr';
        break;
    }
  }
  return (
    <>
      <div className="form-wrapper">
        <form className="form">
          <h1>Finishing Up</h1>
          <p>Double-check everything is OK before confirming.</p>
          <div id="plan-type">
            <div id="info-first">
              <div id="info-first-nested">
                <p>
                  {terms.type.charAt(0).toUpperCase() + terms.type.slice(1)}({terms.duration.charAt(0).toUpperCase() + terms.duration.slice(1)})
                </p>
                <button>Change</button>
              </div>
              <p>{fee}</p>
            </div>
          </div>
        </form>
      </div>
      <div className="navigation-bottom">
        <button
          className="button-link"
          onClick={() => {
            setPage('3');
          }}
        >
          Go Back
        </button>
        <button
          className="button"
          id="confirm-button"
          onClick={() => {
            setPage('4');
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
