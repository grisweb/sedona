import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/Header';
import IntroSection from 'components/IntroSection';
import Footer from 'components/Footer';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';

const Review: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sedona</title>
        <meta name="description" content="Sedona - учебный проект" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <Header />
        <IntroSection
          home={false}
          title="Оставьте свой отзыв"
          desc="Помогите нашим отелям стать лучше! оставьте отзыв о них, а также о посещенных вами достопримечательностях"
        />
        <AboutSection />
        <MapSection />
        <Footer />
      </div>
    </>
  );
};

export default Review;
