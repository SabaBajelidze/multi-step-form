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
        fee = 9;
        break;
      case 'advanced':
        fee = 12;
        break;
      case 'pro':
        fee = 15;
        break;
      default:
        break;
    }
  } else if (terms.duration === 'yearly') {
    switch (terms.type) {
      case 'arcade':
        fee = 90;
        break;
      case 'advanced':
        fee = 120;
        break;
      case 'pro':
        fee = 150;
        break;
      default:
        break;
    }
  }
  let totalFee = fee;
  if(terms.duration === 'monthly') {
    if(terms.largerStorage === true) {
      totalFee += 2;
    }
    if(terms.onlineService === true) {
      totalFee += 1;
    }
    if(terms.customProfile === true) {
      totalFee += 2;
    }
  } else if(terms.duration === 'yearly') {
    if(terms.largerStorage === true) {
      totalFee += 20;
    }
    if(terms.onlineService === true) {
      totalFee += 10;
    }
    if(terms.customProfile === true) {
      totalFee += 20;
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
              <p>{terms.duration === 'monthly' ? '$'+fee+'/mo' : '$'+fee+'/yr'}</p>
            </div>
            <hr className='line'/>
            <div>
              {terms.duration === 'yearly' && terms.onlineService && <div className='pricing'><p>Online Service</p> <p>+10$/yr</p></div>}
              {terms.duration === 'monthly' && terms.onlineService && <div className='pricing'><p>Online Service</p> <p>+1$/mo</p></div>}
              {terms.duration === 'yearly' && terms.largerStorage && <div className='pricing'><p>Larger Storage</p> <p>+20$/yr</p></div>}
              {terms.duration === 'monthly' && terms.largerStorage && <div className='pricing'><p>Larger Storage</p> <p>+2$/mo</p></div>}
              {terms.duration === 'yearly' && terms.customProfile && <div className='pricing'><p>Custom Profile</p> <p>+20$/yr</p></div>}
              {terms.duration === 'monthly' && terms.customProfile && <div className='pricing'><p>Custom Profile</p> <p>+2$/mo</p></div>}
            </div>
          </div>
          <div id='total-price'>
            {terms.duration === 'monthly' ? <p>Total (per month)</p> : <p>Total (per year)</p>}
            <p>{terms.duration === 'monthly' ? '$'+totalFee+'/mo' : '$'+totalFee+'/yr'}</p>
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
            setPage('5');
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
