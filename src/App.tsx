import './App.css';
import { whatIsYourDate, createTableHeader, createTableBody} from "./Dates/"


function App() {

  const info = whatIsYourDate('en-EN', new Date());
  const Calendar = createTableBody(info.start.weekday, info.end.day);


  return (
    <>
      <h3>{info.today.month}</h3>
      <table>
        <thead>
          <tr>
            {createTableHeader('en-EN').map(day => {
              return <th key={day}>{day}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(Calendar).map((row: (number|null)[], index: number) => {
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
    </>
  );
}

export default App;
