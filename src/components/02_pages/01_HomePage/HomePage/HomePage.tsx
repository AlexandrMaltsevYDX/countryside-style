import React from 'react';
import styles from './HomePage.module.scss';
import {
  BlogBlock,
  HeadBlock,
  ObjectsForSaleBlock,
  OurServicesBlock,
  PressBlock,
  TeamBlock,
  ContactsBlock
} from '~pages/01_HomePage/HomePage/blocks/index';
import { ReviewsBlock } from '~common/index';

import objectsForSaleData from "~utils/temp/objectsForSaleData/objectsForSaleItems";
import servicesData from "~utils/temp/OurServicesData/servicesItems";
import pressData from '~data/constant/pressBlock/pressArticlesItems';
import teamMembersData from '~data/temp/employeesList/teamMembersData';
import reviews from '~data/temp/reviewsData/reviewsData';
import generalContactsData from '~data/constant/generalContacts/generalContactsData';


const HomePage = ({ ...props }): JSX.Element => {

  const objectsForSaleItems = objectsForSaleData;
  const ourServicesItems = servicesData;
  const pressInfoItems = pressData;

  return (
    <main className={styles.mainContainer} {...props} >
      <HeadBlock />
      <ObjectsForSaleBlock objItems={objectsForSaleItems} />
      <OurServicesBlock servicesItems={ourServicesItems} />
      <PressBlock pressItems={pressInfoItems} />
      <BlogBlock path={'home'} />
      <TeamBlock teamMembersItems={teamMembersData} />
      <ReviewsBlock reviewsDataItem={reviews} />
      <ContactsBlock generalContactsData={generalContactsData} />
    </main>
  );
};

export { HomePage };
