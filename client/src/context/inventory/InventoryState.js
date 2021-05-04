import React, { useReducer } from 'react';
import InventoryReducer from './InventoryReducer';
import InventoryContext from './InventoryContext';
import axios from 'axios';
import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  GET_ITEM,
  SET_LOADING,
  FILTER_ITEMS,
  CLEAR_FILTER,
  DATA_ERROR,
} from '../type';

const InventoryState = (props) => {
  const initalState = {
    data: [],
    current: null,
    loading: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(InventoryReducer, initalState);

  //get data
  const getData = async () => {
    try {
      dispatch({ type: SET_LOADING });
      const res = await axios.get('/api/inventory_data');
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //add data
  const addData = async (dataItem) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch({ type: SET_LOADING });
      const res = await axios.post('api/inventory_data', dataItem, config);
      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (err) {
      dispatch({ type: DATA_ERROR, payload: err.response.msg });
    }
  };

  //update data
  const updateData = async (dataItem) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch({ type: SET_LOADING });
      const res = await axios.put(
        `api/inventory_data/${dataItem._id}`,
        dataItem,
        config
      );
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //delete data
  const deleteData = async (id) => {
    try {
      dispatch({ type: SET_LOADING });
      await axios.delete(`/api/inventory_data/${id}`);
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: DATA_ERROR,
      });
    }
  };

  //set current data
  const setCurrent = (dataItem) => {
    dispatch({ type: SET_CURRENT, payload: dataItem });
  };

  ///clear current data
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //filter data
  const filterData = (text) => {
    dispatch({ type: FILTER_ITEMS, payload: text });
  };
  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <InventoryContext.Provider
      value={{
        data: state.data,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        addData,
        getData,
        deleteData,
        setCurrent,
        clearCurrent,
        updateData,
        filterData,
        clearFilter,
      }}
    >
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryState;
