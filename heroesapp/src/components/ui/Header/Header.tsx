import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { setLogout } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../hooks/redux";

export const Header = () => {
    const dispatch= useAppDispatch();
    const handleLogout=()=>{
        dispatch(setLogout())
    }
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand >
            <Link to={'/'} className="nav_Link">Inicio</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Item>
                <Link to={'/search'} className="nav_Link">Buscar heroe</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={'/dcHeroes'} className="nav_Link">DC heroes</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to={'/marvelHeroes'} className="nav_Link">Marvel heroes</Link>
            </Nav.Item>
            </Nav>
            <Navbar.Collapse className="justify-content-end gap-2">
                <Navbar.Text>Ingresado como: Admin</Navbar.Text>
                <Nav.Item>
                <div className="d-flex justify-content-center aling-items-center"
                onClick={handleLogout}
                >
                <span style={{color:"#ffff", cursor:"pointer"}} className="material-symbols-outlined">logout</span>
                </div>
                </Nav.Item>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

