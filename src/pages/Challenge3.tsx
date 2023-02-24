import React from 'react'
import '../styles/Challenge1.css'
import '../styles/Challenge3.css'

export const Challenge3: React.FunctionComponent<{}> = () => {

  return <>
  

  <select name="currency">
    <option>USD</option>
    <option>SGD</option>
    <option>RMB</option>
    <option>...</option>
  </select>

  <hr/>

  <div className="tableContainer">
    <table className="table" style={{minWidth: 400}}>
      <thead>
        <tr>
          <th>Base</th>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>USD</td>
          <td>SGD</td>
          <td>1.3513</td>
        </tr>
        <tr>
          <td>USD</td>
          <td>IDR</td>
          <td>14355</td>
        </tr>
        <tr>
          <td colSpan={3}>...</td>
        </tr>
      </tbody>
    </table>
  </div>
  </>
}
