import './styles.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand="xl" sticky="top">
			<Container className="">
				<Navbar.Brand href="#home">
					<img
						src="./img/logo512.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
					<b>React-Bootstrap</b>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link className="mx-2 line" href="/">Home</Nav.Link>
						<Nav.Link className="mx-2 line" href="/products">Products</Nav.Link>
						<Nav.Link className="mx-2 line" href="#link">Departments</Nav.Link>
						<Nav.Link className="mx-2 line" href="#link">Contact</Nav.Link>
						<Nav.Link className="mx-2 line" href="#link">Offers</Nav.Link>
						<NavDropdown title="Menu" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Action3</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Action4</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>

	);
}

export default Header;
