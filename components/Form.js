import React from 'react';
import { useState } from 'react';

function Form() {
  const [reportTable, setReportTable] = useState([])
  function inputHandler(e) {
    e.preventDefault();
    const cookieStand = {
      location: e.target.location.value,
      minCustomers: e.target.minCust.value,
      maxCustomers: e.target.maxCust.value,
      avgCookies: e.target.avgCookies.value
    }

    setReportTable([...reportTable, cookieStand])

  }
  return (
    <div className=''>

      <form onSubmit={inputHandler} className="bg-gray-400 rounded border-2 border-gray-400 justify-center mt-10 p-5 mr-20 ml-20 ">
        <div>
        <h2 className='text-2xl font-sans-bold flex justify-center'>Create Cookie Stand</h2>
        </div>
        <fieldset>
        <label htmlFor="location">Location</label>
        <input name="location" />
        </fieldset>
        <div className='flex'>
        <fieldset className="flex-grow" >
        <legend className='flex flex-col'>Minimum Customers per Hour</legend>
        <input name="minCust" />
        </fieldset>
        <fieldset className='flex-grow'>
        <legend>Maximum Customers per Hour</legend>
        <input name="maxCust" />
        </fieldset>
        <fieldset className='flex-grow'>
        <legend>Average Cookie per Sale</legend>
        <input name="avgCookies" />

        </fieldset>
        </div>
        <button>Create</button>
      </form>
      <div className='flex justify-center'>
      <p >Report Table Coming Soon...</p>
      </div>
      <div className='flex justify-center'>
      {reportTable.map((cookieStand, idx) => {
        return (
            <p key={idx}>
              {JSON.stringify({ cookieStand })}
            </p>
      


        );
      })

      }</div>
    
    
    </div>
    
  );
}

export default Form;
