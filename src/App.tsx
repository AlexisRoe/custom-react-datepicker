import { useState } from 'react';
import './App.css';
import { whatIsYourDate, createTableHeader, createTableBody } from "./Dates/"
import today from "./icons/today.png"

function App() {
  const [show, setShow] = useState(false);

  const info = whatIsYourDate('en-EN', new Date());
  const Calendar = createTableBody(info.start.weekday, info.end.day);

  const showSelectBox = () => {
    setShow(!show)
  };

  return (
    <>
      <div className="card-container flex border">
        <label htmlFor="html-datepicker" className="label">HTML Date Picker</label>
        <input type="date" id="html-datepicker" />
        <fieldset className="output border">
          <legend className="legend">Output</legend>
          ...
        </fieldset>
      </div>
      <div className="card-container flex border">
        <label className="label">Custom Date Picker</label>
        <div className="datepicker border">10.02.2021
          <button className="datepicker--button datepicker--button-choose" onClick={showSelectBox}>
            <img src={today} alt="select data" />
          </button>
          {show && (<div className="custom-selectbox border">
            <h4 className="date-header">{`${info.today.month} ${info.today.year}`}</h4>
            <table className="date-table">
              <thead>
                <tr>
                  {createTableHeader('en-EN').map(day => {
                    return <th key={day}>{day}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {Object.values(Calendar).map((row: (number | null)[], index: number) => {
                  return (
                    <tr key={Object.keys(Calendar)[index]}>
                      {row.map((day: any, index: number) => {
                        return (
                          <td key={index}>{day}</td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>)}
        </div>
        <fieldset className="output border">
          <legend className="legend">Output</legend>
          ...
        </fieldset>
      </div>
    </>
  );
}

export default App;
