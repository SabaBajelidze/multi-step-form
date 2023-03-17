import { useState } from 'react';
// import backgroundImageMobile from './images/bg-sidebar-mobile.svg';
// import backgroundImageDesktop from './images/bg-sidebar-desktop.svg';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';

function App() {
  let [page, setPage] = useState('1');
  let [terms, setTerms] = useState({
    duration: 'monthly',
    onlineService: false,
    largerStorage: false,
    customProfile: false,
    type: undefined,
  });

  function handlePageChanging(n) {
    const pageNumber1 = document.getElementById('page-number-one');
    const pageNumber2 = document.getElementById('page-number-two');
    const pageNumber3 = document.getElementById('page-number-three');
    const pageNumber4 = document.getElementById('page-number-four');
    switch (n) {
      case 1:
        pageNumber1.classList.add('active-page-number');
        pageNumber2.classList.remove('active-page-number');
        pageNumber3.classList.remove('active-page-number');
        pageNumber4.classList.remove('active-page-number');
        setPage('1');
        break;
      case 2:
        pageNumber1.classList.remove('active-page-number');
        pageNumber2.classList.add('active-page-number');
        pageNumber3.classList.remove('active-page-number');
        pageNumber4.classList.remove('active-page-number');
        setPage('2');
        break;
      case 3:
        pageNumber1.classList.remove('active-page-number');
        pageNumber2.classList.remove('active-page-number');
        pageNumber3.classList.add('active-page-number');
        pageNumber4.classList.remove('active-page-number');
        setPage('3');
        break;
      case 4:
        pageNumber1.classList.remove('active-page-number');
        pageNumber2.classList.remove('active-page-number');
        pageNumber3.classList.remove('active-page-number');
        pageNumber4.classList.add('active-page-number');
        setPage('4');
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="navigation">
        <div className="page-list">
          <div
            className="page-number"
            id="page-number-one"
            onClick={() => handlePageChanging(1)}
          >
            1
          </div>
          <div
            className="page-number"
            id="page-number-two"
            onClick={() => handlePageChanging(2)}
          >
            2
          </div>
          <div
            className="page-number"
            id="page-number-three"
            onClick={() => handlePageChanging(3)}
          >
            3
          </div>
          <div
            className="page-number"
            id="page-number-four"
            onClick={() => handlePageChanging(4)}
          >
            4
          </div>
        </div>
      </div>
      {page === '1' && <PageOne setPage={setPage} />}
      {page === '2' && (
        <PageTwo setPage={setPage} setTerms={setTerms} terms={terms} />
      )}
      {page === '3' && (
        <PageThree setPage={setPage} setTerms={setTerms} terms={terms} />
      )}
      {page === '4' && <PageFour setPage={setPage} terms={terms} />}
      {page === '5' && <PageFive />}
    </>
  );
}

export default App;
