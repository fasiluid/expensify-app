import moment from 'moment';

const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
}

const altFilters = {
    text: 'bill',
    startDate: moment(0),
    endDate: moment(0).add(3,'days'),
    sortBy: 'amount'
}

export { filters, altFilters };