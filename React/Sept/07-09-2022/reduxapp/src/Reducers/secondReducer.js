let initialData = {
  name: "Dummy Name",
  city: "Dummy City",
};

function secondReducer(defaultStoreData = initialData, action) {
  switch (action.type) {
    case "NAME":
      defaultStoreData = {
        ...initialData,
        name: action.payload,
      };
  }
  return defaultStoreData;
}

export default secondReducer;
