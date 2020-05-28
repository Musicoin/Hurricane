import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0;
    margin-bottom: 8px;
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
    color: ${props => props.theme.linkColor};
`;

export default function Card(props) {
  return (
      <Wrapper>
        {props.title &&
        <Title>
          <p>{props.title}</p>
        </Title>}
        <Content>
          {props.children}
        </Content>
      </Wrapper>
  );
}
