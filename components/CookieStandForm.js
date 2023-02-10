import React from 'react';
import { useAuth } from '../contexts/auth';
import ReportTable from './CookieStandTable';
import useResource from '../hooks/useResource';


export default function Form() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function inputHandler(e) {
    e.preventDefault();
    const cookieStand = {
      location: parseInt(e.target.location.value),
      minimum_customers_per_hour: parseInt(e.target.minCust.value),
      maximum_customers_per_hour: parseInt(e.target.maxCust.value),
      average_cookies_per_sale: parseInt(e.target.avgCookies.value),
      owner: user.id,
    };

    createResource(cookieStand);


  }

  return (
    <div className=''>

      <form onSubmit={inputHandler} className="bg-violet-400 rounded border-2 text-white border-violet-400 justify-center mt-10 p-5 mr-20 ml-20 flex flex-col ">
        <div>
          <h2 className='text-2xl font-sans-bold flex justify-center'>Create Cookie Stand</h2>
        </div>
        <fieldset>
          <label className='p-2' htmlFor="location">Location</label>
          <input className="text-black w-11/12" name="location" />
        </fieldset>
        <div className='flex flex-wrap w-full md:w-5/5 mt-10'>
          <fieldset className="flex-grow rounded bg-violet-300 border-2 border-violet-300 p-4 mr-1 ml-1" >
            <legend className='flex flex-col'>Minimum Customers per Hour</legend>
            <input className="text-black" name="minCust" />
          </fieldset>
          <fieldset className='flex-grow rounded bg-violet-300 border-8 border-violet-300 p-4 mr-1 ml-1'>
            <legend >Maximum Customers per Hour</legend>
            <input className="text-black " name="maxCust" />
          </fieldset>
          <fieldset className='flex-grow rounded bg-violet-300 border-8 border-violet-300 p-4 mr-1 ml-1'>
            <legend>Average Cookie per Sale</legend>
            <input className="text-black" name="avgCookies" />

          </fieldset>
          <button className="bg-cyan-500 text-white font-bold  py-2 px-4 rounded hover:bg-blue-600 mt-4 mr-5 ml-5 flex-wrap w-20">Create</button>
        </div>

      </form>
      <ReportTable />
    </div>

  );
}