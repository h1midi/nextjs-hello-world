import { LandingPageII } from "@/components/landing-page-ii";
import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'HomePage'});
 
  return {
    title:"Coneduc",
    description: t('description'),
  };
}


export default function Home() {
  return (<LandingPageII />);
}
