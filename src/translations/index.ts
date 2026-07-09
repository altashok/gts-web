
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { aboutTranslations } from './about';
import { teamTranslations } from './team';
import { activitiesTranslations } from './activities';
import { affiliationsTranslations } from './affiliations';
import { tamilCourseTranslations } from './tamilcourse';
import { enrollTranslations } from './enroll';
import { contactTranslations } from './contact';
import { termsTranslations } from './terms';

export const translations = {
  ta: {
    ...commonTranslations.ta,
    ...homeTranslations.ta,
    ...aboutTranslations.ta,
    ...teamTranslations.ta,
    ...activitiesTranslations.ta,
    ...affiliationsTranslations.ta,
    ...tamilCourseTranslations.ta,
    ...enrollTranslations.ta,
    ...contactTranslations.ta,
    ...termsTranslations.ta,
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...aboutTranslations.en,
    ...teamTranslations.en,
    ...activitiesTranslations.en,
    ...affiliationsTranslations.en,
    ...tamilCourseTranslations.en,
    ...enrollTranslations.en,
    ...contactTranslations.en,
    ...termsTranslations.en,
  }
};
