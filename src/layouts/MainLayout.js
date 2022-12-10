const MainLayout = (props) => {
  /**header
   * main
   * footer
   */
  return (
    <>
      <div>This is MainLayout</div>
      <header>{props.header}</header>
      <main>{props.children}</main>
      <footer>{props.footer}</footer>
    </>
  );
};

export default MainLayout;
