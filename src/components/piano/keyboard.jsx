import React, {useContext, useEffect} from 'react';
import {DataContext} from 'context/provider';
import './keyboard.css';
import soundEffects from 'soundEffects';

const Keyboard = () => {
  const {state, dispatch} = useContext(DataContext);

  useEffect(() => {
    dispatch({type:'SET_EFFECTS', effects: soundEffects});
  })

  return (
    <div className="container">
      { 
      typeof state.effects !== 'undefined' && state.effects.soundEffects.map(effect => { 
        return <div key={effect.id} id={effect.id} onClick={() => dispatch({type:'REPLAY', id: effect.id})} 
        className={effect.keyType}></div>})
      }
    </div>
  )
};

export default Keyboard;
