// var initialData = {
//   name: "S1",
//   value: "Dummy Value",
//   gender: "male",
//   phone: 9000000,
// };

const textReducer = (state = "Innomatics", action) => {
  switch (action.type) {
    case "TEXT":
      state = action.payload;
      break;
  }
  return state;
};

export default textReducer;
