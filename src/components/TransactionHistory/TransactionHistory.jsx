import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tableRow}>
          <th className={css.tableTH}>Type</th>
          <th className={css.tableTH}>Amount</th>
          <th className={css.tableTH}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className={css.tbody}>
          <tr className={css.tableRow} type={item.type}>
            <td className={css.tableTD}>{item.type}</td>
            <td className={css.tableTD}>{item.amount}</td>
            <td className={css.tableTD}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
