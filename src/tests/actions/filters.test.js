import moment from "moment";
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test("should test start date action", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should test end date action", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should test filter by text", () => {
  const action = setTextFilter("good");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "good",
  });
});

test("should test filter text by default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ''
  });
});

test('should test sort bay amount', ()=> {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'

    })
})

test('should tst sort by date', ()=> {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})