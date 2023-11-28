import router from "../../router/route"
import { Link, To } from "react-router-dom"

import './Navbar.scss'
console.log(router)
const pages = router.routes[0].children

const Navbar = () => {
  return (
    <section className='navbar'>
      {pages!.map(({ path }) => (
        <Link to={path as To} key={path}>{path}</Link>
      ))}
    </section>
  )
}

export default Navbar