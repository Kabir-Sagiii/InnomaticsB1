function wishMessage(wish) {
  switch (wish) {
    case "GM":
      console.log("Good Morning, Kabir");
      break;
    case "GA":
      console.log("Good Afternoon, Kabir");
      break;
    case "GE":
      console.log("Good Evening, Kabir");
      break;
    case "GN":
      console.log("Good Night, Kabir");
      break;

    default:
      console.log("No wish Message, Kabir");
  }
}

wishMessage("GM");
