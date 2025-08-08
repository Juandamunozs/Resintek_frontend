import siteConfig from '../components/const/siteConfig';

export function getYearsOfExperience() {
  const startDate = new Date(siteConfig.experience);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();

  const hasNotHadAnniversaryThisYear =
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate());

  if (hasNotHadAnniversaryThisYear) {
    years--;
  }

  return years === 1
    ? '1 año de experiencia'
    : `${years} años de experiencia`;
}

