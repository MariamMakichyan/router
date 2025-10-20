import { NavLink } from "react-router-dom"

function Header() {
    return(
       <div>
<NavLink to ='/'>Posts</NavLink>
<NavLink to ='/comments'>Comments</NavLink>
<NavLink to="/photos">Photos</NavLink>
<NavLink to='/users'>Users</NavLink>
       </div> 
    )
}

export default Header