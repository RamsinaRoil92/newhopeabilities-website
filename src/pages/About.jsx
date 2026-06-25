import { AboutStory } from '../components/about/AboutStory'
import { NdisProviderPanel } from '../components/about/NdisProviderPanel'
import { PhilosophyGrid } from '../components/about/PhilosophyGrid'
import { pageMeta } from '../content/pages'
import { Seo } from '../seo/Seo'

export function About() {
  return (
    <>
      <Seo {...pageMeta.about} image="/images/team-park-melbourne.webp" />
      <AboutStory />
      <PhilosophyGrid />
      <NdisProviderPanel />
    </>
  )
}