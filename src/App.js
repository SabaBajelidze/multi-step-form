import { useState } from "react";
import backgroundImage from './images/bg-sidebar-mobile.svg';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";

function App() {
  const [page, setPage] = useState('1');
  const [terms, setTerms] = useState({
    duration: 'monthly',
    onlineService: false,
    largerStorage: false,
    customProfile: false
  });
  return (
    <>
    <div className="navigation">
        <img src={backgroundImage} alt="background" />
        <div className="wrapper">
          <ul>
            <li>
              <div className="page-number" id="page-number-one">
                1
              </div>
            </li>
            <li>
              <div className="page-number" id="page-number-two">2</div>
            </li>
            <li>
              <div className="page-number" id="page-number-three">3</div>
            </li>
            <li>
              <div className="page-number" id="page-number-four">4</div>
            </li>
          </ul>
        </div>
      </div>
      {page === '1' && <PageOne setPage={setPage}/>}
      {page === '2' && <PageTwo setPage={setPage} setTerms={setTerms} terms={terms}/>}
      {page === '3' && <PageThree setPage={setPage} setTerms={setTerms} terms={terms}/>}
      {page === '4' && <PageFour setPage={setPage} terms={terms}/>}
    </>
  )
}

export default App;
