import {Landing} from 'components'

import * as bg_BG from 'i18n/bg-BG.json'

export default function Home() {
  return (
    <body dir="ltr">
      <Landing lang={'bg-BG'} content={bg_BG} />
    </body>
  )
}
