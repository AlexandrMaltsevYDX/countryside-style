import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';
import { ContactInfoElement } from '../ContactInfoElement/ContactInfoElement';

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ employeeItem, index, teamRole }) => {

  const styleItems = {
    oddStyles: {
      color: styles.green,
      template: '',
    },
    evenStyles: {
      color: styles.gray,
      template: styles.innerBlock_textFirst
    }
  };



  const isOdd = (num: number) => num % 2 !== 0;

  const setColor = isOdd(index + 1) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(index + 1) ? styleItems.oddStyles.template : styleItems.evenStyles.template;


  const quoteElement = (
    <div className={styles.quoteContainer}>
      <span className={styles.quotationMark}>
        “
      </span>
      <p className={styles.quoteText}>
        {employeeItem.quote}
      </p>
    </div>
  );



  return (
    <div className={`${styles.container}  ${setColor}`}>
      <div className={`${styles.innerBlock} ${setTemplate}`}>

          <Image className={styles.image}
            src={employeeItem.photo}
            alt={employeeItem.name} />

        <div className={styles.infoContainer}>
          <h3 className={styles.name}>
            {employeeItem.name}
          </h3>

          <p className={styles.jobTitle}>
            {employeeItem.jobTitle}
          </p>

          {(teamRole == 'employee' || teamRole == 'all') ?
            <ContactInfoElement employeeItem={employeeItem}>
              {quoteElement}
            </ContactInfoElement>
            :
            quoteElement
          }
        </div>
      </div>
    </div>
  );
};

export { TeamMemberCard };