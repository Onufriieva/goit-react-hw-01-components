import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ items }) {
return (
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>  
{items.map(item => (
<TransactionItem
 key={item.id} 
type={item.type} 
amount={item.amount}
 currency={item.currency}/>)
 )}
   </tbody>

</table>
)
};

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })
)
}
 