import React from 'react';
import styles from './ContactInfoElement.module.scss';
import { ContactInfoElementInterface } from './ContactInfoElement.interface.ts';

import { ContactLink, PhoneNumber } from '~entities/index.ts';



const ContactInfoElement: React.FC<ContactInfoElementInterface> = ({ employeeItem, children }) => {




  return (
    <address className={styles.addressContainer} >
      {employeeItem.contacts.phone &&
        <PhoneNumber className={styles.phoneNumber}
          employeeItem={employeeItem}
          colorText={'white'} />
      }

      <div className={styles.contactsList}>
        {employeeItem.contacts.telegram &&
          <ContactLink linkInfoData={employeeItem} messenger={'telegram'} colorSchema={'white'} />
        }
        {employeeItem.contacts.whatsapp &&
          <ContactLink linkInfoData={employeeItem} messenger={'whatsapp'} colorSchema={'white'} />
        }
      </div>

      {children}

      {employeeItem.contacts.phone &&
        <button className={styles.buttonCall}>
          Оставить заявку
        </button>
      }
    </address>
  );
};

export { ContactInfoElement };
