import { pageMeta } from '../content/pages'
import { Seo } from '../seo/Seo'
import { HeroSection } from '../components/home/HeroSection'
import { MelbourneCta } from '../components/home/MelbourneCta'
import { ServicesPreview } from '../components/home/ServicesPreview'
import { ValuesSection } from '../components/home/ValuesSection'

export function Home() {
  return (
    <>
      <Seo {...pageMeta.home} />
      <HeroSection />
      <ValuesSection />
      <ServicesPreview />
      <MelbourneCta />
    </>
  )
}