import mySecondStore from "../ReduxStore/altStore";
const productDetail = (productInformation) => {
  mySecondStore.dispatch({
    type: "PRODUCT",
    payload: productInformation,
  });
};
export default productDetail;
