import { useEffect } from "react";

export default function PageThree({ setPage, plan }) {
  useEffect(() => {
    const pageNumber2 = document.getElementById('page-number-two');
    pageNumber2.classList.remove('active-page-number');
    const pageNumber3 = document.getElementById('page-number-three');
    pageNumber3.classList.add('active-page-number');
  });

  function handleCheckboxChange(e) {
    if(e.target.name === 'online-service') {
      const parentDiv = document.getElementById('online-service');
      if(e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
      }
    } else if(e.target.name === 'larger-storage') {
      const parentDiv = document.getElementById('larger-storage');
      if(e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
      }
    } else if(e.target.name === 'custom-profile') {
      const parentDiv = document.getElementById('custom-profile');
      if(e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
      }
    }
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="form">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
          <div className="checkbox-input" id='online-service'>
              <input type='checkbox' name='online-service' onChange={e => handleCheckboxChange(e)}/>
              <div className="checkbox-text">
                <div>
                <p>Online service</p>
                <p>Access to multiplayer games</p>
                </div>
                <p style={{margin: '0', color: 'var(--purplish-blue)'}} className='checkbox-price'>{plan  ? '+$10/yr' : '+$1/mo'}</p>
              </div>
          </div>
          <div className="checkbox-input" id='larger-storage'>
              <input type='checkbox' name='larger-storage' onChange={e => handleCheckboxChange(e)}/>
              <div className="checkbox-text">
                <div>
                <p>Larger Storage</p>
                <p>Extra 1TB storage of cloud save</p>
                </div>
                <p style={{margin: '0', color: 'var(--purplish-blue)'}} className='checkbox-price'>{plan  ? '+$20/yr' : '+$2/mo'}</p>
              </div>
          </div>
          <div className="checkbox-input" id='custom-profile'>
              <input type='checkbox' name='custom-profile' onChange={e => handleCheckboxChange(e)}/>
              <div className="checkbox-text">
                <div>
                <p>Customizable Profile</p>
                <p>Custom theme on your profile</p>
                </div>
                <p style={{margin: '0', color: 'var(--purplish-blue)'}} className='checkbox-price'>{plan  ? '+$20/yr' : '+$2/mo'}</p>
              </div>
          </div>
        </form>
      </div>
      <div className="navigation-bottom">
      <button className='button-link' onClick={() => {
          setPage('2');
        }}>Go Back</button>
        <button className='button' onClick={() => {
          setPage('4');
        }}>Next Step</button>
      </div>
    </>
  )
}