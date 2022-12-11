import styled from 'styled-components';
import MainHeader from '../components/MainHeader';

const StyledMainHeader = styled(MainHeader)`
  margin-bottom: 10px;
`;

const MainLayout = (props) => {
  /**header
   * main
   * footer
   */
  return (
    <>
      <div>This is MainLayout</div>
      <StyledMainHeader></StyledMainHeader>
      <main>{props.children}</main>
      <footer>{props.footer}</footer>
    </>
  );
};

export default MainLayout;
