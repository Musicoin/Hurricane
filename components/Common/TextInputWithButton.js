import styled from 'styled-components';

const Text = styled.input`
  width: 100px;
  height: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #E6ECF0;
  padding: 10px;
  padding-right: 50px;
`;

const Button = styled.input`
  margin-left: -50px;
  height: 25px;
  width: 40px;
  background: #E6ECF0;
  -webkit-appearance: none;
  border: 0;
`;

export default function textInputWithButton(props) {
  return (
      <div>
        <Text type="text" value={props.value} onChange={props.onChange}/>
        <Button type="submit" onClick={props.onClick} value={props.buttonText}/>
      </div>
  );
}
