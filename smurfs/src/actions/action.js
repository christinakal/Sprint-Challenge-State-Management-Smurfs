import axios from 'axios';

export const getData = () => dispatch => {
    console.log('it worked')
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };