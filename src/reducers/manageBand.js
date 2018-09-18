export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      let band = {
        name: action.name,
        id: Math.random()*100000
      }

      return { ...state, bands: [...state.bands, band] }

    case "DELETE_BAND":
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
