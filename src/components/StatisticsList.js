import PropTypes from 'prop-types';


export default function StatisticsList({ stats }) {
    return (

  <ul>
    {stats.map(stat => (
           <li  key={stat.id}>          
           <span>{stat.label}</span>
           <> </>
           <span>{stat.percentage}%</span>
         </li>
    ))}
     </ul>
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