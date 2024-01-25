import React from 'react';
import Image from 'next/image';
import styles from './ContactItemElement.module.scss';
import { ContactItemElementInterface } from './ContactItemElement.interface.ts';

import { ContactLink, PhoneNumber } from '~entities/index.ts';
import LocationIcon from '~svg/contacts/location.svg';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';

const ContactItemElement: React.FC<ContactItemElementInterface> = ({ employeeInfo }) => {

  const markdownStyles = {
    p: styles.infoContainer__jobTitle,
    strong: '',
    em: ''
  };

  return (
    <div key={employeeInfo._id} className={styles.contactContainer}>

      <Image
        className={styles.avatar}
        src={employeeInfo.photo}
        alt={employeeInfo.name} />

      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__inner}>
          <p className={styles.infoContainer__name}>
            {employeeInfo.name}
          </p>

          {employeeInfo.jobTitle &&
            <> {/* <p className={styles.infoContainer__jobTitle}>employeeInfo.jobTitle</p> */}
              {useReactMarkdown(employeeInfo.jobTitle, markdownStyles)}
            </>
          }

          {employeeInfo.location &&
            <p className={styles.infoContainer__location}>
              <span className={styles.infoContainer__location_icon}>
                <LocationIcon />
              </span>
              {employeeInfo.location}
            </p>
          }

        </div>

        {employeeInfo.contacts.phone &&
          <PhoneNumber
            className={styles.phoneNumber}
            employeeItem={employeeInfo}
            colorText={'black'} />
        }

        <div className={styles.messengersContainer}>
          {employeeInfo.contacts.telegram &&
            <ContactLink linkInfoData={employeeInfo} messenger={'telegram'} colorSchema={'transparent'} />
          }

          {employeeInfo.contacts.whatsapp &&
            <ContactLink linkInfoData={employeeInfo} messenger={'whatsapp'} colorSchema={'transparent'} />
          }

        </div>
      </div>
    </div>
  );
};

export { ContactItemElement };