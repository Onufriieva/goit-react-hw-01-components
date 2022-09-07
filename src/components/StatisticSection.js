import PropTypes from 'prop-types';

export default function StatisticSection({ title, children }) {
return (
    <section>  
        {title && <h2>{title}</h2>}
        {children}
     </section>
 )
}

StatisticSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};