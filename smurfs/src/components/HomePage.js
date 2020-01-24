import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/action";
import PostPage from "./PostPage";
import Smurfs from "./Smurfs";
import { deleteSmurf } from "../actions/action";
import { useDispatch } from "react-redux";

const HomePage = props => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteSmurf(id));
  };

  return (
    <>
      <div className="cards">
        {props.data.map(element => {
          return (
            <>
              <Smurfs
                key={element.id}
                name={element.name}
                age={element.age}
                height={element.height}
              />
              <button onClick={() => handleDelete(element.id)}>Delete</button>
            </>
          );
        })}
      </div>
      <PostPage />
    </>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData, deleteSmurf })(HomePage);
