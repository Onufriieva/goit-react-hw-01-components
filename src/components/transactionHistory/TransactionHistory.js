import PropTypes from 'prop-types';
import TransactionItem from '../transactionItem/TransactionItem';
import {TransactionTableBox, TransactionTh} from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
return (
<TransactionTableBox>
  <thead>
    <tr>
      <TransactionTh>Type</TransactionTh>
      <TransactionTh>Amount</TransactionTh>
      <TransactionTh>Currency</TransactionTh>
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

</TransactionTableBox>
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
 