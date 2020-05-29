import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const Stats = styled.h2`
    font-size: ${props => props.theme.em(20, props.theme.baseFontSize)};
    font-weight: bold;
    color: #333;
    >span {
      color: ${props => props.theme.brandColor};
    }
`;

class StatsComponent extends React.Component {

  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    return (
        <Stats>
          <span><NumberFormat value={this.props.stats ? this.props.stats.plays : 0} displayType={'text'} thousandSeparator={true}/></span>
          &nbsp;Played and paid by UBI,&nbsp;
          <span><NumberFormat value={this.props.stats ? this.props.stats.tips : 0} displayType={'text'} thousandSeparator={true}/></span> tips by fans.
        </Stats>
    );
  }
}

export default StatsComponent;
