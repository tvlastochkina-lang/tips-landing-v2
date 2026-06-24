import {Landing} from 'components'

import * as tr_TR from 'i18n/tr-TR.json'

export default function Home() {
  return (
    <body dir="ltr">
      <Landing lang={'tr-TR'} content={tr_TR} />
    </body>
  )
}
