import MainLayout from "../layouts/MainLayout";
import CarouselBanner from "../components/CarouselBanner";

const ManPage = () => {
  return (
    <>
      <div>This is MainPage</div>
      <MainLayout header="This is header" footer="This is footer">
        This is MainLayout
        <CarouselBanner />
      </MainLayout>
    </>
  );
};
export default ManPage;
