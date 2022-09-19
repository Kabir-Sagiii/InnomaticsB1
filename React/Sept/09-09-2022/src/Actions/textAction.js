import mystore from "../ReduxStore/store";
const textAction = (data) => {
  mystore.dispatch({
    type: "TEXT",
    payload: data,
  });
};

export default textAction;
