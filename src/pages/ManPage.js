import MainLayout from '../layouts/MainLayout';
import CarouselBanner from '../components/CarouselBanner';
import MainButton from '../components/MainButton';

const ManPage = () => {
  return (
    <>
      <div class="title">This is ManPage</div>
      <MainLayout header="This is header" footer="This is footer">
        This is MainLayout
        <CarouselBanner />
        <MainButton active>綜合排名</MainButton>
        <MainButton>最新</MainButton>
      </MainLayout>
    </>
  );
};
export default ManPage;
