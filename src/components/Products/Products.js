import './styles.css';
import { Row, Container, Col, Card } from 'react-bootstrap';

function Products() {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col lg={6} className="text-center">
					<h1>Latest Products</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua.</p>
				</Col>
			</Row>
			<Row>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p1.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p2.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p3.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p4.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p5.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p6.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p7.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
				<Col lg={3} md={6} className="text-center">
					<Card>
						<img className="img-fluid" src="./img/product/p8.jpg" alt="" />
						<h5>addidas New Hammer sole for Sports person</h5>
						<h6>$150.00</h6>
						<div className="text-justify">
							<p>
								<button className="btn btn-block btn-outline-info p-1" href="/">add to bag</button>
							</p>
							<p>
								<button className="btn btn-block btn-info p-1" href="/">view more</button>
							</p>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>

	);
}

export default Products;
