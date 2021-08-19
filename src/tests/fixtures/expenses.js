import moment from "moment";

export default [
    {
      id: "1",
      description: "Rent",
      amount: 50000,
      note: "",
      createdAt: 0,
    },
    {
      id: "2",
      description: "Coffee",
      amount: 1050,
      note: "",
      createdAt: moment(0).subtract("4", "days").valueOf(),
    },
    {
      id: "3",
      description: "Bill",
      amount: 20000,
      note: "",
      createdAt: moment(0).add("4", "days").valueOf(),
    },
  ];