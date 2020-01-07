const INITIAL_STATE = {
    dataParam: [],
    detailsData: []
  };
  
  export default (state = INITIAL_STATE, action) => {
          switch (action.type) {      
          case 'DATALOAD':
          {
            return {...state,dataParam:action.dataParam} 
          }                 
          case 'FILTER':
          {
            return { ...state, detailsData: state.dataParam.filter(s => s.imdbID === action.details.imdbID) }
          }             
          default :
          return {...state};    
      }
    };