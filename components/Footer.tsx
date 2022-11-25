import styles from 'styles/footer.module.scss';

const links = [
  {
    name: "Twitter",
    link: 'https://twitter.com/',
    icon: '/images/icon-twitter.svg',
  },
  {
    name: "Facebook",
    link: 'https://www.facebook.com/',
    icon: '/images/icon-facebook.svg',
  },
  {
    name: "Youtube",
    link: 'https://www.youtube.com/',
    icon: '/images/icon-youtube.svg',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.hashtag}>#visitSedona</div>
        <div className={styles.socialLinks}>
          {links.map((link) => (
            <a href={link.link} className={styles.socialLink} key={link.name}>
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
        <div className={styles.developed}>
          Разработано <img src="/images/htmlacademy.svg" alt="HTML Academy" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;