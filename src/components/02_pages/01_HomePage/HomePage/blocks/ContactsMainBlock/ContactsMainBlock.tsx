import React from 'react';
import { ContactsBlockProps } from './ContactsMainBlock.interface';
import styles from './ContactsMainBlock.module.scss';

import { AddressElement } from '~entities/index';
import { ContactForm } from '~common/QuestionFormBlock/elements';


const ContactsMainBlock: React.FC<ContactsBlockProps> = ({ generalContactsData }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.containerInfo}>
        <h2 className={styles.title}>
          Контакты
        </h2>
        <AddressElement addressInfoData={generalContactsData} />
      </div>

      <ContactForm contentType='map' srcContent={generalContactsData.mapLink} />
    </section>
  );
};

export { ContactsMainBlock };
