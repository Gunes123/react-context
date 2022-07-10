import React, {useReducer, createContext} from 'react'
import {reducer} from './reducer'

export const store = {
  effects:[]
};

export const DataContext = createContext(store);

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, DataContext);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}

export default Provider;
