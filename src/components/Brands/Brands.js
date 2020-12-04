import './styles.css';
import { Row, Container, Col } from 'react-bootstrap';

function Brands() {
	return (
		<Container>
			<Row className="p-4">
				<Col><img className="img-fluid d-block mx-auto" src='./img/brand/1.png' alt="" /></Col>
				<Col><img className="img-fluid d-block mx-auto" src='./img/brand/2.png' alt="" /></Col>
				<Col><img className="img-fluid d-block mx-auto" src='./img/brand/3.png' alt="" /></Col>
				<Col><img className="img-fluid d-block mx-auto" src='./img/brand/4.png' alt="" /></Col>
				<Col><img className="img-fluid d-block mx-auto" src='./img/brand/5.png' alt="" /></Col>
			</Row>
		</Container>
	);
}

export default Brands;