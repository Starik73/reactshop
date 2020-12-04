import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4  col-md-6 col-sm-6">
                    <h6>About Us</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                        magna aliqua.
						</p>
                </div>
                <div className="col-lg-4  col-md-6 col-sm-6">
                    <h6>Newsletter</h6>
                    <p>Stay update with our latest</p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                        <h6>Follow Us</h6>
                        <p>Let us be social</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;