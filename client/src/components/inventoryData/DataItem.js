import React, { useContext } from 'react';
import InventoryContext from '../../context/inventory/InventoryContext';

const DataItem = ({ data }) => {
  const { ItemCode, Name1, Name2, VendorName, Price, Date, _id } = data;
  const inventoryContext = useContext(InventoryContext);
  const { deleteData, setCurrent, clearCurrent } = inventoryContext;
  const onDelete = () => {
    deleteData(_id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <ul className='list'>
        <li>
          <span className='text-dark text-left'>Item Code :</span>
          <strong className='text-primary'> {ItemCode}</strong>
        </li>

        {Name1 && (
          <li>
            <span className='text-dark text-left'>Name1 :</span>
            <span className='text-primary '> {Name1}</span>
          </li>
        )}

        {Name2 && (
          <li>
            <span className='text-dark text-left'>Name2 :</span>
            <span className='text-primary '> {Name2}</span>
          </li>
        )}
        {VendorName && (
          <li>
            <span className='text-dark text-left'>Vendor Name :</span>
            <span className='text-primary '> {VendorName}</span>
          </li>
        )}
        {Price && (
          <li>
            <span className='text-dark text-left'>Price :</span>
            <span className='text-primary '> {Price}</span>
          </li>
        )}
        {Date && (
          <li>
            <span className='text-dark text-left'>Date :</span>
            <span className='text-primary '> {Date}</span>
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark sm' onClick={() => setCurrent(data)}>
          Edit
        </button>
        <button className='btn btn-danger sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default DataItem;
