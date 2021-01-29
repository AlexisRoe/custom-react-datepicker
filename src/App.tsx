import { useState } from 'react';
import './App.css';
import { whatIsYourDate, createTableHeader, createTableBody } from "./Dates/"
import today from "./icons/today.png"

function App() {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  const [show, setShow] = useState(false);
  const [htmlValue, setHtmlValue] = useState("")
  const [customValue, setCustomValue] = useState(() => new Intl.DateTimeFormat('de-DE', options).format(date))

  const info = whatIsYourDate('en-EN', date);
  const Calendar = createTableBody(info.start.weekday, info.end.day);

  const showSelectBox = () => {
    setShow(!show)
  };

  const customSelect = (day: string) => {
    if (day === null) {
      return
    }
    setCustomValue(`${day} ${info.today.month} ${info.today.year}`);
    showSelectBox();
  }

  return (
    <>
      <div className="card-container flex border">
        <label htmlFor="html-datepicker" className="label">HTML Date Picker</label>
        <input type="date" id="html-datepicker" value={htmlValue} onChange={event => setHtmlValue(event.target.value)} />
        <fieldset className="output border">
          <legend className="legend">Output</legend>
          {htmlValue}
        </fieldset>
      </div>
      <div className="card-container flex border">
        <label className="label">Custom Date Picker</label>
        <div className="datepicker border">{customValue}
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
                          <td key={index} onClick={() => customSelect(day)}>{day}</td>
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
          {customValue}
        </fieldset>
      </div>
    </>
  );
}

export default App;
