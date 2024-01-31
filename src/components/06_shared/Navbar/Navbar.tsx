import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { NavbarInterface } from './Navbar.interface';

const Navbar: React.FC<NavbarInterface> = ({ listItems, parentComponent, children }) => {

  const parent = {
    header: {
      list: styles.list_header,
      link: styles.link_header
    },
    footer: {
      list: styles.list_footer,
      link: styles.link_footer
    }
  };
  const setParentComponent = parent[parentComponent];

  return (
    <>
      <ul className={`${styles.list} ${setParentComponent.list}`}>
        {listItems.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <Link className={`${styles.link} ${setParentComponent.link}`} href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
        {children}
      </ul>
    </>
  );
};

export { Navbar };
