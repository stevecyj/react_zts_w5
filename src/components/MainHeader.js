import styled from 'styled-components';

const StyleHeader = styled.header`
  display: flex;
  background-color: red;
  height: 120px;
  border-color: #ee4d2d;
`;

const MainHeader = (props) => {
  return (
    <StyleHeader className={props.className}>
      <img src="https://via.placeholder.com/150" alt="logo" srcset="" />
      <input type="text" />
    </StyleHeader>
  );
};

export default MainHeader;
