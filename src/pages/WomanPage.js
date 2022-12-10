import MainLayout from "../layouts/MainLayout";
import CarouselBanner from "../components/CarouselBanner";

const WomanPage = () => {
  return (
    <>
      <div class="title">This is WomanPage</div>
      <MainLayout header="This is header" footer="This is footer">
        This is MainLayout
        <CarouselBanner />
      </MainLayout>
    </>
  );
};

export default WomanPage;
