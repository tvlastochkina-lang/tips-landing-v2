import {Landing} from 'components'

import * as en_US from 'i18n/en-US.json'

export default function Home() {
  return (
    <body dir="ltr">
      <Landing lang={'en-US'} content={en_US} />
    </body>
  )
}
