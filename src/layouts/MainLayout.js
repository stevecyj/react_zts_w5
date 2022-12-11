import styled from 'styled-components';

const StyleHeader = styled.header`
  background-color: red;
  height: 120px;
  border-color: #ee4d2d;
`;

const MainLayout = (props) => {
  /**header
   * main
   * footer
   */
  return (
    <>
      <div>This is MainLayout</div>
      <StyleHeader>{props.header}</StyleHeader>
      <main>{props.children}</main>
      <footer>{props.footer}</footer>
    </>
  );
};

export default MainLayout;
