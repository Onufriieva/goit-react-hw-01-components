import PropTypes from 'prop-types';
import {ContainerSection, TitleStatistic} from './StatisticSection.styled'

export default function StatisticSection({ title, children }) {
return (
    <ContainerSection>  
        {title && <TitleStatistic>{title}</TitleStatistic>}
        {children}
     </ContainerSection>
 )
}

StatisticSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};