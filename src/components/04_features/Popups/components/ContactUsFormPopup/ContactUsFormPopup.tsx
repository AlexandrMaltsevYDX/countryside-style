import React from 'react';
import styles from './ContactUsFormPopup.module.scss';
import { RequestFormComponent } from '~features/Forms/index.ts';


const ContactUsFormPopup = () => {
  return (
    <div className={styles.innerContainer}>
      <RequestFormComponent />
    </div>
  );
};

export { ContactUsFormPopup };
