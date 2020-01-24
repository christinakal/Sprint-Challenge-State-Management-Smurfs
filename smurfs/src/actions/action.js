import axios from "axios";

export const getData = () => dispatch => {
  console.log("it worked");
  dispatch({ type: "FETCH_DATA_START" });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res);
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "FETCH_DATA_FAILURE", payload: err.response });
    });
};
