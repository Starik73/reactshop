import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles.css';

function Banner() {
    return (

        <section className="banner-area">
            <div className="container">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="col-lg-5 col-md-6">

                                        <h1>Nike New <br />Collection!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" href="/"><span className="lnr lnr-cross"></span></a>
                                            <span className="add-text text-uppercase">Add to Bag</span>
                                        </div>

                                    </div>
                                    <div className="col-lg-7">
                                        <div className="banner-img">
                                            <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item row">
                                    <div className="col-lg-5">

                                        <h1>Nike New <br />Collection!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div className="add-bag d-flex align-items-center">
                                            <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                                            <span className="add-text text-uppercase">Add to Bag</span>
                                        </div>

                                    </div>
                                    <div className="col-lg-7">
                                        <div className="banner-img">
                                            <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;