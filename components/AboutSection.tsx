import styles from 'styles/about-section.module.scss';
import clsx from 'clsx';

const benefits = [
  {
    name: 'Жилье',
    desc: 'Рекомендуем пожить в настоящем мотеле, все как в кино!',
    icon: '/images/icon-house.svg',
  },
  {
    name: 'Сувениры',
    desc: 'Не только китайского, но и местного производства!',
    icon: '/images/icon-gift.svg',
  },
  {
    name: 'Еда',
    desc: 'Всегда заказывайте фирменный бургер, Вы не разочаруетесь!',
    icon: '/images/icon-burger.svg',
  },
];

const causes = [
  {
    name: 'Небольшая площадь',
    desc: 'Все интересные места находятся очень близко',
    number: 3,
  },
  {
    name: 'Красивая дорога',
    desc: 'Ехать в Седону из Лас-Вегаса совсем не скучно!',
    number: 4,
  },
  {
    name: 'Мало туристов',
    desc: 'Большинство едет в гранд каньон и толпится там',
    number: 5,
  },
];

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.cause}>
        <div className={clsx(styles.causeWrap, styles.causeFirst)}>
          <h2 className={styles.causeTitle}>Настоящий городок</h2>
          <div className={styles.causeNumber}>— №1 —</div>
          <div className={styles.causeDesc}>
            Седона не аттракцион для туристов, там течёт своя жизнь
          </div>
        </div>
        <div className={styles.causeImageWrap}>
          <img
            className={styles.causeImage}
            src="/images/city.jpg"
            alt="City Sedona"
          />
        </div>
      </div>
      <div className={styles.benefits}>
        {benefits.map((benefit) => (
          <div className={styles.benefit} key={benefit.name}>
            <div className={styles.benefitIcon}>
              <img src={benefit.icon} alt={benefit.name} />
            </div>
            <div className={styles.benefitWrap}>
              <div className={styles.benefitName}>{benefit.name}</div>
              <div className={styles.benefitDesc}>{benefit.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cause}>
        <div className={styles.causeWrap}>
          <h2 className={styles.causeTitle}>Там есть мост дьявола</h2>
          <div className={styles.causeNumber}>— №2 —</div>
          <div className={styles.causeDesc}>
            Да, по нему можно пройти! Если вы осмелитесь, конечно
          </div>
        </div>
        <div className={styles.causeImageWrap}>
          <img
            className={styles.causeImage}
            src="/images/bridge.jpg"
            alt="City Sedona"
          />
        </div>
      </div>
      <div className={styles.causes}>
        {causes.map((cause) => (
          <div className={styles.causeItem} key={cause.name}>
            <h2 className={styles.causeTitle}>{cause.name}</h2>
            <div className={styles.causeNumber}>— №{cause.number} —</div>
            <div className={styles.causeDesc}>{cause.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
