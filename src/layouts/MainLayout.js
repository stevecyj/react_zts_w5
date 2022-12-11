import styled from 'styled-components';
import MainHeader from '../components/MainHeader';

const MainLayout = (props) => {
  /**header
   * main
   * footer
   */
  return (
    <>
      <div>This is MainLayout</div>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
      <footer>{props.footer}</footer>
    </>
  );
};

export default MainLayout;
