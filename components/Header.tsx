import styles from 'styles/header.module.scss';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const menu = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Фото и видео',
    link: '/media',
  },
  {
    name: 'Форма отзыва',
    link: '/review',
  },
  {
    name: 'HTML Academy',
    link: 'https://htmlacademy.ru/',
  },
];

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuActive);
  }, [mobileMenuActive]);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.container}>
          <div
            className={clsx(
              styles.menuWrap,
              mobileMenuActive && styles.menuOpen,
            )}
            onClick={() => {setMobileMenuActive(false)}}
          >
            <nav className={clsx(styles.menu)}>
              <ul className={styles.list}>
                {menu.map((item) => (
                  <li className={styles.item} key={item.link}>
                    <Link href={item.link}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={styles.close}
                aria-label="Close menu"
                onClick={() => setMobileMenuActive(false)}
              />
            </nav>
          </div>
          <div className={styles.logo}>
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/images/logotype-desktop.svg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/logotype-tablet.svg"
              />
              <img src="/images/logotype-mobile.svg" alt="Logotype" />
            </picture>
          </div>
          <button
            type="button"
            className={styles.toggleWrap}
            onClick={() => setMobileMenuActive(true)}
          >
            <div className={styles.toggle} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
