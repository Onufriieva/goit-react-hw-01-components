import PropTypes from 'prop-types';
import {TransactionItemBox, TransactionTrBox} from './TransactionItem.styled'

export default function TransactionItem({ type, amount, currency }) {
    return (
        <TransactionTrBox>
          <TransactionItemBox>{type}</TransactionItemBox>
          <TransactionItemBox>{amount}</TransactionItemBox>
          <TransactionItemBox>{currency}</TransactionItemBox>
        </TransactionTrBox>
    )
}

TransactionItem.propTypes = {
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
}
