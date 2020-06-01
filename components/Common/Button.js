import styled from 'styled-components';

export const Button = styled.a`
    border: 1px solid;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: ${props => props.theme.em(14, props.theme.baseFontSize)};
    font-weight: 500;
    box-sizing: border-box;
    text-decoration: none;
`;

export const PrimaryButton = styled(Button)`
    background-image: linear-gradient(to top right, #6A82FB, #FC5C7D);
    color: white;
    border: none;
    border-radius: 5px;
`;

export const SecondaryButton = styled(Button)`
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    justify-content: space-between;
`;
