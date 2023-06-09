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
  return (
    <div className="page-container">
      <div className="container">
        <form className="form">
          <h1>Select your plan</h1>
          <p id='page2-p'>
            You have the option of monthly or
            <br /> yearly billing
          </p>
          <div className="type-div-flex">
            <label className="radio-label">
              <input
                type="radio"
                name="type"
                checked={terms.type === 'arcade'}
                onChange={(e) => {
                  if (e.target.checked) setTerms({ ...terms, type: 'arcade' });
                }}
              />
              <div className="type-div">
                <img src={arcade} alt="arcade" />
                <div>
                  <h2>Arcade</h2>
                  {terms.duration === 'yearly' ? <p>$90/yr</p> : <p>$9/mo</p>}
                </div>
              </div>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="type"
                checked={terms.type === 'advanced'}
                onChange={(e) => {
                  if (e.target.checked)
                    setTerms({ ...terms, type: 'advanced' });
                }}
              />
              <div className="type-div">
                <img src={advanced} alt="advanced" />
                <div>
                  <h2>Advanced</h2>
                  {terms.duration === 'yearly' ? <p>$120/yr</p> : <p>$12/mo</p>}
                </div>
              </div>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="type"
                checked={terms.type === 'pro'}
                onChange={(e) => {
                  if (e.target.checked) setTerms({ ...terms, type: 'pro' });
                }}
              />
              <div className="type-div">
                <img src={pro} alt="pro" />
                <div>
                  <h2>Pro</h2>
                  {terms.duration === 'yearly' ? <p>$150/yr</p> : <p>$15/mo</p>}
                </div>
              </div>
            </label>
          </div>
          <div id="select-plan" onClick={() => {
            const checked = document.getElementById('plan-checkbox-page2').checked
            document.getElementById('plan-checkbox-page2').checked = !checked;
            if (checked) {
              setTerms({ ...terms, duration: 'monthly' });
            } else {
              setTerms({ ...terms, duration: 'yearly' });
            }

          }}>
            {terms.duration === 'monthly' ? (
              <p>Monthly</p>
            ) : (
              <p style={{ color: 'var(--cool-gray)' }}>Monthly</p>
            )}
            <div className="switch">
              <input
                type="checkbox"
                id='plan-checkbox-page2'
                checked={terms.duration === 'yearly'}
              />
              <span className="slider round"></span>
            </div>
            {terms.duration === 'yearly' ? (
              <p>Yearly</p>
            ) : (
              <p style={{ color: 'var(--cool-gray)' }}>Yearly</p>
            )}
          </div>
        </form>
      </div>
      <div className="navigation-bottom">
        <button
          className="button"
          onClick={() => {
            if (terms.type !== undefined) {
              setPage('3');
            }
          }}
        >
          Next Step
        </button>
        <button
          className="button-link"
          onClick={() => {
            setPage('1');
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
