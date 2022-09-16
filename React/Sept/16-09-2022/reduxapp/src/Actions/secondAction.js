import mySecondStore from "../ReduxStore/altStore";

function secondAction(userInfo) {
  mySecondStore.dispatch({
    type: "NAME",
    payload: userInfo,
  });
}

export default secondAction;
