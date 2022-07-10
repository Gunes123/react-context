export function reducer(state, action) {
  switch (action.type) {
    case 'REPLAY':
      state.effects.soundEffects.map(effect => {
         if(effect.id === action.id){
          const audio = new Audio(); 
          audio.src = process.env.PUBLIC_URL+ '/assets' + effect.path
          audio.play();
         }
      })
      return {...state};
    case 'SET_EFFECTS':
      state.effects = action.effects;
      return {...state};
    default:
      return state;
  }
}
