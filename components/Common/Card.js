import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.theme.em(16, props.theme.baseFontSize)};
    font-weight: 500;
    padding: 8px;
`;

const Filter = styled.div`
    // display: flex;
    font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};
    font-weight: 400;
`;
const FilterLink = styled.a`
    color: #8899A6;
`;

const FilterLinkActive = styled(FilterLink)`
    font-weight: 500;
    color: #333;
`;

const Content = styled.div`
    width: ${props => props.width ? props.width : 'auto'};
`;

export const More = styled.div`
    padding: 8px;
    font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};;
    text-align: center;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
`;

export const Link = styled.a`
    color: ${props => props.theme.global.colors.brand};
    text-decoration: none;
`;

export default function Card(props) {
  return (
      <Wrapper>
        {props.title &&
        <Title>
          <p>{props.title}</p>
        </Title>}
        <Content width={props.width}>
          {props.children}
        </Content>
      </Wrapper>
  );
}
