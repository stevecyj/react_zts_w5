import styled from 'styled-components';

const StyledMainButton = styled.button`
  background-color: ${(props) =>
    props.active ? 'rgb(238, 77, 45)' : 'fdfdfd'};
  color: #fff;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 2%);
  height: 2.125rem;
  line-height: 2.125rem;
  border-radius: 2px;
  border: 0;
`;

/**
 * active
 */
const MainButton = (props) => {
  return <StyledMainButton active>{props.children}</StyledMainButton>;
};

export default MainButton;
