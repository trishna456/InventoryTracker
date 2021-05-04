import React, { useContext, useRef, useEffect } from 'react';
import InventoryContext from '../../context/inventory/InventoryContext';

const DataFilter = () => {
  const inventoryContext = useContext(InventoryContext);
  const { filterData, clearFilter, filtered } = inventoryContext;
  const text = useRef('');
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterData(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Filter data...'
        onChange={onChange}
      />
    </form>
  );
};

export default DataFilter;
