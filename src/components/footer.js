export const Footer = ({content}) => {
  const {footer: {
    title,
    email,
    admin,
    copyright
  }} = content

  return (
    <footer>
      <div className="title">{title}</div>
      <a className="email" href={`mailto:${email}`}>{email}</a>
      <div className="contacts">
        <img src="/icons/facebook.svg" alt="facebook" />
        <img src="/icons/linkedin.svg" alt="linkedin" />
        <img src="/icons/instagram.svg" alt="instagram" />
      </div>
      <a className="admin">{admin}</a>
      <div className="copyright">{copyright}</div>
    </footer>
  )
}
