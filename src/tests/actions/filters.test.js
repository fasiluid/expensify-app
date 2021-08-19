import moment from "moment";
import {
  setFilterText,
  setStartDate,
  setEndDate,
  sortByAmout,
  sortByDate,
} from "../../actions/filters";

test("shoul generate start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("shoul generate start date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should sort by amout action object", () => {
  const action = sortByAmout();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should setFilterText action object with text value", () => {
  const text = 'rent';  
  const action = setFilterText(text);
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text
  });
});

test("should setFilterText action object without text value", () => {
  const action = setFilterText();
  expect(action).toEqual({
    type: "SET_FILTER_TEXT",
    text: "",
  });
});
