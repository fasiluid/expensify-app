import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 with no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should corretly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(50000);
});

test('should corretly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(71050);
});