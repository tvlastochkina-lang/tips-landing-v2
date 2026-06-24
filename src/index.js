import {createRoot} from 'react-dom/client'
import {App} from 'components'

import 'style/normalize.css'
import 'style/style.scss'

createRoot(document.getElementById('root'))
  .render(<App />)
