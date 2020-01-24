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

export const postData = item => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs`, item)
    .then(response => {
      console.log("POST", response);
      dispatch({ type: "POST_DATA", payload: response.data });
    })
    .catch(err => {
      console.log("Something did not work, error is: " + err);
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: "DELETE_START" });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: "DELETE_SUCCESS", payload: res.data });
    })
    .catch(err => {
      dispatch({ type: "DELETE_ERROR", payload: err.response.status });
    });
};
