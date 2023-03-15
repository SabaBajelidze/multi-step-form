import { useEffect } from 'react';
import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';

export default function PageTwo({ setPage, setTerms, terms }) {
  useEffect(() => {
    const pageNumber = document.getElementById('page-number-one');
    pageNumber.classList.remove('active-page-number');
    const pageNumber2 = document.getElementById('page-number-two');
    pageNumber2.classList.add('active-page-number');
    const pageNumber3 = document.getElementById('page-number-three');
    pageNumber3.classList.remove('active-page-number');
  });

  function handlePlanChange(e) {
    if(!e.target.checked) {
      setTerms({...terms, duration: 'monthly'});
    } else {
      setTerms({...terms, duration: 'yearly'});
    }
  }
  return (
    <>
      <div className="form-wrapper">
        <form className="form">
          <h1>Select your plan</h1>
          <p>
            You have the option of monthly or
            <br /> yearly billing
          </p>
          <label className="radio-label">
            <input type="radio" name="type" onChange={e => {
              if(e.target.checked) setTerms({...terms, type: 'arcade'})
            }} />
            <div className="type-div">
              <img src={arcade} alt="arcade" />
              <div>
                <h2>Arcade</h2>
                {terms.duration === 'yearly' ? <p>$90/yr</p> : <p>$9/mo</p>}
              </div>
            </div>
          </label>
          <label className="radio-label">
            <input type="radio" name="type" onChange={e => {
              if(e.target.checked) setTerms({...terms, type: 'advanced'})
            }}/>
            <div className="type-div">
              <img src={advanced} alt="advanced" />
              <div>
                <h2>Advanced</h2>
                {terms.duration === 'yearly' ? <p>$120/yr</p> : <p>$12/mo</p>}
              </div>
            </div>
          </label>
          <label className="radio-label">
            <input type="radio" name="type" onChange={e => {
              if(e.target.checked) setTerms({...terms, type: 'pro'})
            }}/>
            <div className="type-div">
              <img src={pro} alt="pro" />
              <div>
                <h2>Pro</h2>
                {terms.duration === 'yearly' ? <p>$150/yr</p> : <p>$15/mo</p>}
              </div>
            </div>
          </label>
          <div id="select-plan">
            {!terms.duration === 'yearly' ? <p>Monthly</p> : <p style={{color: 'var(--cool-gray)'}}>Monthly</p>}
            <label className="switch">
              <input type="checkbox" checked={terms.duration === 'yearly'} onChange={e => handlePlanChange(e)} />
              <span className="slider round"></span>
            </label>
            {terms.duration === 'yearly' ? <p>Yearly</p> : <p style={{color: 'var(--cool-gray)'}}>Yearly</p>}
          </div>
        </form>
      </div>
      <div className='navigation-bottom'>
        <button className='button-link' onClick={() => {
          setPage('1');
        }}>Go Back</button>
        <button className='button' onClick={() => {
          setPage('3');
        }}>Next Step</button>
      </div>
    </>
  );
}
