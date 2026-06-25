import 'style/normalize.css'
import 'style/style.scss'

export default function RootLayout({children}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <title>Tips Landing</title>
      </head>
      {children}
    </html>
  )
}