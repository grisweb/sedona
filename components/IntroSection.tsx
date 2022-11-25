import styles from 'styles/intro-section.module.scss';
import clsx from 'clsx';

const IntroSection = ({
  home,
  title,
  desc,
}: {
  home: boolean;
  title: string;
  desc: string;
}) => {
  return (
    <section className={clsx(styles.section, !home && styles.small)}>
      <div className={styles.introWrap}>
        <div className={styles.backgroundWrap}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/back-desktop.jpg"
            />
            <img
              className={styles.image}
              src="/images/back-mobile.jpg"
              alt="Sedona"
            />
          </picture>
        </div>
        <div className={styles.content}>
          {home ? (
            <>
              <img src="/images/welcome.svg" alt="Welcome" />
              <img src="/images/gorgeous.svg" alt="Gorgeous" />
              <img src="/images/sedona.svg" alt="Sedona text" />
              <img src="/images/quote.svg" alt="" />
            </>
          ) : (
            <img src="/images/sedona.svg" alt="Sedona text" />
          )}
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.info}>
          {title}
        </div>
        <div className={styles.intro}>
          {desc}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
