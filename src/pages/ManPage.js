import MainLayout from '../layouts/MainLayout';
import CarouselBanner from '../components/CarouselBanner';

const ManPage = () => {
  return (
    <>
      <div class="title">This is ManPage</div>
      <MainLayout header="This is header" footer="This is footer">
        This is MainLayout
        <CarouselBanner />
      </MainLayout>
    </>
  );
};
export default ManPage;
