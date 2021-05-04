import React, { Fragment, useContext, useEffect } from 'react';
import InventoryContext from '../../context/inventory/InventoryContext';
import DataItem from './DataItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Data = () => {
  const inventoryContext = useContext(InventoryContext);
  const { data, filtered, getData, loading } = inventoryContext;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  if (data !== null && data.length === 0 && !loading) {
    return <h4>Please add some data</h4>;
  }
  return (
    <Fragment>
      {data !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((dataItem) => (
                <CSSTransition
                  key={dataItem._id}
                  timeout={500}
                  classNames='item'
                >
                  <DataItem data={dataItem} />
                </CSSTransition>
              ))
            : data.map((dataItem) => (
                <CSSTransition
                  key={dataItem._id}
                  timeout={500}
                  classNames='item'
                >
                  <DataItem data={dataItem} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Data;
