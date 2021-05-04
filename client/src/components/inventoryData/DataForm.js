import React, { useState, useContext, useEffect } from 'react';
import InventoryContext from '../../context/inventory/InventoryContext';

const DataForm = () => {
  const [dataItem, setData] = useState({
    ItemCode: '',
    Name1: '',
    Name2: '',
    VendorName: '',
    Price: '',
    Date1: '',
  });

  const inventoryContext = useContext(InventoryContext);

  const { addData, current, clearCurrent, updateData } = inventoryContext;

  useEffect(() => {
    if (current !== null) {
      setData(current);
    } else {
      setData({
        ItemCode: '',
        Name1: '',
        Name2: '',
        VendorName: '',
        Price: '',
        Date1: '',
      });
    }
  }, [inventoryContext, current]);

  const { ItemCode, Name1, Name2, VendorName, Price, Date1 } = dataItem;

  const onChange = (e) => {
    setData({ ...dataItem, [e.target.name]: e.target.value });
  };

  const handleDate = (e) => {
    let day = e.getDate();
    let month = e.getMonth();
    let year = e.getFullYear();
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    let date = day + '/' + month + '/' + year;
    setData({ Date1: date });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addData(dataItem);
    } else {
      updateData(dataItem);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();

    setData({
      ItemCode: '',
      Name1: '',
      Name2: '',
      VendorName: '',
      Price: '',
      Date1: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Inventory Data' : 'Add Inventory Data'}
      </h2>
      <input
        type='text'
        placeholder='Item Code'
        name='ItemCode'
        required={true}
        value={ItemCode}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Name 1'
        name='Name1'
        value={Name1}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Name2'
        name='Name2'
        value={Name2}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Price'
        name='Price'
        value={Price}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Vendor Name'
        name='VendorName'
        value={VendorName}
        onChange={onChange}
      />
      <div id='input-container'>
        <i className='far fa-calendar-alt' />

        <input
          className='datepicker'
          data-date-format='mm/dd/yyyy'
          type='text'
          placeholder='Date'
          name='Date1'
          value={Date1}
          onChange={onChange}
        />
      </div>
      <input
        type='submit'
        value={current ? 'Update Data' : 'Add Data'}
        className='btn btn-primary btn-block'
      />
      {current && (
        <div>
          <button className='btn bnt-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default DataForm;
