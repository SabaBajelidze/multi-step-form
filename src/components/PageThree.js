import { useEffect } from 'react';

export default function PageThree({ setPage, setTerms, terms }) {
  useEffect(() => {
    const pageNumber2 = document.getElementById('page-number-two');
    pageNumber2.classList.remove('active-page-number');
    const pageNumber3 = document.getElementById('page-number-three');
    pageNumber3.classList.add('active-page-number');
    const pageNumber4 = document.getElementById('page-number-four');
    pageNumber4.classList.remove('active-page-number');
  });

  function handleCheckboxChange(e) {
    if (e.target.name === 'online-service') {
      const parentDiv = document.getElementById('online-service');
      if (e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
        setTerms({...terms, onlineService: true})
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
        setTerms({...terms, onlineService: false})
      }
    } else if (e.target.name === 'larger-storage') {
      const parentDiv = document.getElementById('larger-storage');
      if (e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
        setTerms({...terms, largerStorage: true})
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
        setTerms({...terms, largerStorage: false})
      }
    } else if (e.target.name === 'custom-profile') {
      const parentDiv = document.getElementById('custom-profile');
      if (e.target.checked) {
        parentDiv.style.border = '1px solid var(--purplish-blue)';
        setTerms({...terms, customProfile: true})
      } else {
        parentDiv.style.border = '1px solid var(--light-gray)';
        setTerms({...terms, customProfile: false})
      }
    }
  }

  return (
    <div className='page-container'>
      <div className="container">
        <form className="form">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
          <div className="checkbox-input" id="online-service">
            <input
              type="checkbox"
              checked={terms && terms.onlineService}
              name="online-service"
              id="online-service-id"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <div className="checkbox-text">
              <div>
                <p>Online service</p>
                <p>Access to multiplayer games</p>
              </div>
              <p
                style={{ margin: '0', color: 'var(--purplish-blue)' }}
                className="checkbox-price"
              >
                {terms.duration === 'yearly' ? '+$10/yr' : '+$1/mo'}
              </p>
            </div>
          </div>
          <div className="checkbox-input" id="larger-storage">
            <input
              type="checkbox"
              checked={terms && terms.largerStorage}
              name="larger-storage"
              id="larger-storage-id"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <div className="checkbox-text">
              <div>
                <p>Larger Storage</p>
                <p>Extra 1TB storage of cloud save</p>
              </div>
              <p
                style={{ margin: '0', color: 'var(--purplish-blue)' }}
                className="checkbox-price"
              >
                {terms.duration === 'yearly' ? '+$20/yr' : '+$2/mo'}
              </p>
            </div>
          </div>
          <div className="checkbox-input" id="custom-profile">
            <input
              type="checkbox"
              checked={terms && terms.customProfile}
              name="custom-profile"
              id="custom-profile-id"
              onChange={(e) => handleCheckboxChange(e)}
            />
            <div className="checkbox-text">
              <div>
                <p>Customizable Profile</p>
                <p>Custom theme on your profile</p>
              </div>
              <p
                style={{ margin: '0', color: 'var(--purplish-blue)' }}
                className="checkbox-price"
              >
                {terms.duration === 'yearly' ? '+$20/yr' : '+$2/mo'}
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="navigation-bottom">
        <button
          className="button"
          onClick={() => {
            setPage('4');
          }}
        >
          Next Step
        </button>
        <button
          className="button-link"
          onClick={() => {
            setPage('2');
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
