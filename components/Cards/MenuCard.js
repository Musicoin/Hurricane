import Card from '../Common/Card';
import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.em(14, props.theme.baseFontSize)};
    a {
        color: #333;
        text-decoration: none;
    }
`;

const Link = styled.li`
    display: flex;
    align-items: center;
    padding: 16px;
    // max-height: 48px;
    cursor: pointer;
    &:hover {
      background-color: #E6ECF0;
      font-weight: 500;
    }
`;

export default function MenuCard() {
  return (
      <Card title="Menu">
        <Menu>
          <ul>
            <Link><a href="https://musicoin.org/how-it-works">What is Musicoin?</a></Link>
            <Link><a href="https://musicoin.org/team">Team</a></Link>
            <Link><a href="https://drive.google.com/file/d/1KVvcwPKUngMNffgWW65k1p4UvKg5QG0u/view">Whitepaper</a></Link>
            <Link><a href="https://musicoin.org/legal/legal">Legal</a></Link>
            <Link><a href="https://musicoin.org/resources/faq">FAQ</a></Link>
          </ul>
        </Menu>
      </Card>
  );
}
