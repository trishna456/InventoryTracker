import React from 'react';
import Data from '../inventoryData/Data';
import DataForm from '../inventoryData/DataForm';
import DataFilter from '../inventoryData/DataFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <DataForm />
      </div>
      <div>
        <DataFilter />
        <Data />
      </div>
    </div>
  );
};
export default Home;
