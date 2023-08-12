import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Package = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Package
