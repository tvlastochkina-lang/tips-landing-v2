import {
  Section1,
  Section2,
  Section3,
  Section5,
  Section6,
  Section7
} from 'components'
import {Section4} from 'components/section-4'

export const Main = ({content}) => {
  return (
    <>
      <Section1 content={content} />
      <Section2 content={content} />
      <Section3 content={content} />
      <Section4 content={content} />
      <Section5 content={content} />
      <Section6 content={content} />
      <Section7 content={content} />
    </>
  )
}
