import moment from 'moment'
import selectExpenses from '../../selectors/expenses'

const expenses = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 10000,
    createdAt: 0
},
{
    id: '2',
    description: 'Cridit card',
    note: '',
    amount: 20000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Food',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]
test('should filter selectors', ()=> {

    const filters = {
        text: 'r',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])

})

test('should test filter by start date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should test by end date filter', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should test by sort date', ()=> {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should test by sort amount', ()=> {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
})