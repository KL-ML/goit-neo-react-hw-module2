import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import Container from '../components-structure/Container/Container';

export default function TransactionHistory({ items }) {
  return (
    <Container variant={'tableContainer'}>
      <table className={css.tableWrap}>
        <thead className={css.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.tableRow} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

TransactionHistory.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
