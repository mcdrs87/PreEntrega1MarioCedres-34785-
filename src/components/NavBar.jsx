
import CartWidget from "./CartWidget"
function NavBar (){
    return(
        <>
         <a href="/">LOGO</a>
        <ul>
            <li><a href="/">Remeras</a></li>
            <li><a href="/">Accesorios</a></li>
            <li><a href="/">Contacto</a></li>
        </ul>
        <CartWidget/>
        </>
    )
}
export default NavBar;