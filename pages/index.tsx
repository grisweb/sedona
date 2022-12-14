import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/Header';
import IntroSection from 'components/IntroSection';
import AboutSection from 'components/AboutSection';
import MapSection from 'components/MapSection';
import Footer from 'components/Footer';

const Home: NextPage = () => {
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
          home
          title="Седона — небольшой городок в Аризоне, заслуживающий большего!"
          desc="Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!"
        />
        <AboutSection />
        <MapSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
