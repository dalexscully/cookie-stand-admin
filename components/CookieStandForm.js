import React from 'react';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';


export default function Form() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function inputHandler(e) {
    e.preventDefault();
    const info = {
      location: e.target.location.value,
      minimum_customers_per_hour: parseInt(e.target.minCust.value),
      maximum_customers_per_hour: parseInt(e.target.maxCust.value),
      average_cookies_per_sale: parseInt(e.target.avgCookies.value),
      owner: user.id,
    };

    createResource(info);


  }

  return (
    <div className=''>

      <form onSubmit={inputHandler} className="bg-gray-300 rounded border-2 text-white border-gray-400 justify-center mt-10 p-5 mr-20 ml-20 flex flex-col ">
        <fieldset>
          <legend className="text-center text-2xl ">
            ADD LOCATION
          </legend>

          <input className="text-black w-3/4 " name="location" />

          <button className="bg-gray-500 text-white font-bold  py-2 px-4 rounded hover:bg-gray-800 w-20  mt-4 mr-5 ml-5 flex-wrap ">Create</button>
        </fieldset>
        <div className='flex flex-wrap justify-between w-full mt-10'>
          <fieldset className="flex-grow  p-4 mr-1 ml-1" >
            <legend className='flex flex-col'>Minimum Customers per Hour</legend>
            <input className="text-black" name="minCust" />
          </fieldset>
          <fieldset className='flex-grow p-4 mr-1 ml-1'>
            <legend >Maximum Customers per Hour</legend>
            <input className="text-black " name="maxCust" />
          </fieldset>
          <fieldset className='flex-grow p-4 mr-1 ml-1'>
            <legend>Average Cookie per Sale</legend>
            <input className="text-black" name="avgCookies" />

          </fieldset>

        </div>

      </form>

    </div>

  );
}