let initialData = {
  name: "Dummy Name",
  city: "Dummy City",
  productData: {},
};

function secondReducer(defaultStoreData = initialData, action) {
  switch (action.type) {
    case "NAME":
      defaultStoreData = {
        ...initialData,
        name: action.payload,
      };
      break;
    case "PRODUCT":
      defaultStoreData = {
        ...initialData,
        productData: action.payload,
      };
      break;
  }
  return defaultStoreData;
}

export default secondReducer;
