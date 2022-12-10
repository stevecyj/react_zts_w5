import MainLayout from "../layouts/MainLayout";

const ManPage = () => {
  return (
    <>
      <div>This is MainPage</div>
      <MainLayout header="This is header" footer="This is footer">
        This is a pen
      </MainLayout>
    </>
  );
};
export default ManPage;
