import './styles.css';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './styles.css';

function Banner() {
    return (
        <Container className="p-2">
            <Row>
                <Col xs={0} lg={1} className="text-center">
                    <h4>SIDEBAR</h4>
                    <button className="btn btn-block btn-outline-info">Link</button>
                    <button className="btn btn-block btn-outline-info">Link</button>
                    <button className="btn btn-block btn-outline-info">Link</button>
                    <button className="btn btn-block btn-outline-info">Link</button>
                    <button className="btn btn-block btn-outline-info">Link</button>
                </Col>
                <Col xs={12} lg={11} className="">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/800/200"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-left">Nike New <br />Collection!</h3>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                                <div className="d-flex align-items-left">
                                    <a className="btn btn-secondary" href="/">
                                        <span className="text-uppercase">Add to Bag</span>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src="https://picsum.photos/801/201"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-left">Nike New <br />Collection!</h3>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                                <div className="d-flex align-items-left">
                                    <a className="btn btn-info" href="/">
                                        <span className="text-uppercase">Add to Bag</span>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/802/202"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-left">Nike New <br />Collection!</h3>
                                <p className="text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                                <div className="d-flex align-items-left">
                                    <a className="btn btn-primary" href="/">
                                        <span className="text-uppercase">Add to Bag</span>
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;