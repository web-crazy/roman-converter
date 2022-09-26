import { useState } from 'react';
import converter from 'roman-numerals';
import logo from './assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [romanNumber, setRomanNumber] = useState('');

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    setInputNumber(inputVal);
    if (!inputVal || inputVal === '0') {
      setRomanNumber('');
    } else {
      setRomanNumber(converter.toRoman(inputVal));
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100 pb-5">
      <nav className="navbar navbar-dark bg-primary px-4">
        <img
          width={50}
          height={50}
          src={logo}
          className="App-logo" alt="logo"
        />
      </nav>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div style={{ maxWidth: 600 }} className="pb-5 px-4">
          <div className="h1 text-center mb-5">Roman Number Converter</div>

          <form className="d-flex needs-validation" noValidate>
            <div className="flex-grow-1">
              <input
                type="number"
                value={inputNumber}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Integer"
                aria-label="Integer"
                style={{ height: 50 }}
              />
            </div>

            <div className="px-3">
              <div className="h-100 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-grow-1">
              <input
                type="text"
                disabled
                value={romanNumber}
                className="form-control"
                placeholder="Roman Number"
                aria-label="Roman Number"
                style={{ height: 50 }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
