import PropTypes from 'prop-types';
import { ListContainer, ItemContainer, LabelSpan, PercentSpan } from './StatisticsList.styled';


export default function StatisticsList({ stats }) {
    return (

  <ListContainer>
    {stats.map(stat => (
           < ItemContainer  key={stat.id}>          
           <LabelSpan>{stat.label}</LabelSpan>
           <> </>
           <PercentSpan>{stat.percentage}%</PercentSpan>
         </ItemContainer>
    ))}
     </ListContainer>
 ) 
}

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })    
  )
}