import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilter } from "../../components/ExpenseListFilters";
import { expect } from "@jest/globals";

let setStartDate, setEndDate, setFilterText, sortByDate, sortByAmout, wrapper;

beforeEach(() => {
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setFilterText = jest.fn();
  sortByDate = jest.fn();
  sortByAmout = jest.fn();

  wrapper = shallow(
    <ExpenseListFilter
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setFilterText={setFilterText}
      sortByAmout={sortByAmout}
      sortByDate={sortByDate}
      filters={filters}
    />
  );
});

test("should render ExpenseListFilter correclty", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilter with alternate filters correclty", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle filter text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test("should handle sortBy date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });

  expect(sortByDate).toHaveBeenCalled();
});

test("should handle sortBy amount", () => {
  const value = "amount";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });

  expect(sortByAmout).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate,
    endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const calendarFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
    calendarFocused
  );
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
