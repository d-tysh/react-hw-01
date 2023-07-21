import PropTypes from "prop-types";

import { Label, Percentage, StatList, StatListItem, StatisticSection, Title } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return (
        <StatisticSection>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(item => 
                    <StatListItem key={item.id}>
                        <Label>{item.label}</Label>
                        <Percentage>{item.percentage}%</Percentage>
                    </StatListItem>
                )}
            </StatList>
        </StatisticSection>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}