import Navbar from "./navbar/navbar";

const Layout = ({ children }) => {

  return (
    <section className="app-layout">

      <Navbar />

      <section className="app-content">
        {children}
      </section>

    </section>
  )

}

export default Layout