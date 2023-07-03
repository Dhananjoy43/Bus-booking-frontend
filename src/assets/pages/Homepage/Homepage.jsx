import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";

// import AOS ========================>
import Aos from "aos";
import "aos/dist/aos.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Homepage() {
  // UseEffect to set animation ==============>
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  function handleSearch() {
    navigate("/searchbus");
  }

  return (
    <>
      <Navbar />
      <section className="home_section">
        {/*---------------- main container----------------- */}
        <div className="main_container bg_color_2">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="left_container align-center"
          >
            <h1>ExpressWing</h1>
            <h2>Where speed meets comfort!</h2>
            <button className="btn-transparent" onClick={handleSearch}>
              Book Now
            </button>
          </div>
          <div className="right_container align-center">
            <img src="images\Homepage_background.jpg" alt="image" />
            <img src="images\luxury_bus.jpg" alt="image" />
          </div>
        </div>
        {/* ----------------first container---------------- */}
        <div className="first_container bg_color_4">
          <div data-aos="fade-right" className="image_container">
            <img src="images/bus.jpg" alt="image" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="description_container"
          >
            <h4>FIRST OF ALL</h4>
            <h2>ExpressWing - Book Bus Tickets Online</h2>
            <p>
              ExpressWing is the ultimate destination for booking bus tickets
              online. With a user-friendly interface and a wide range of
              options, we offer the best bus booking service across India. Book
              your tickets now!
            </p>
          </div>
        </div>
        {/* ---------------------Second container-------------------------- */}
        <div className="first_container bg_color_2">
          <div data-aos="fade-up" className="description_container">
            <h4>NOT TO MENTION</h4>
            <h2>Why Choose ExpressWing?</h2>
            <p>
              ExpressWing offers the most convenient and affordable bus booking
              service in India. With our user-friendly platform, you can easily
              book your bus tickets from the comfort of your home.
            </p>
          </div>
          <div data-aos="fade-left" className="second_image_container">
            <img src="images/bus.jpg" alt="image" />
          </div>
        </div>
        {/* ------------------------Third container------------------------ */}
        <div data-aos="fade-right" className="first_container bg_color_1">
          <div className="image_container">
            <img src="images/bus.jpg" alt="image" />
          </div>
          <div data-aos="fade-up" className="description_container">
            <h4>AND LET'S NOT FORGET</h4>
            <h2>Our Services</h2>
            <p>
              At ExpressWing, we offer a wide range of bus booking services to
              meet your travel needs. From luxury buses to budget-friendly
              options, we have it all. Our platform is designed to make your
              booking experience seamless and hassle-free.
            </p>
          </div>
        </div>
        {/* -------------------Fourth container------------------- */}
        <div className="second_container bg_color_2">
          <h2 data-aos="zoom-in" data-aos-duration="2500">
            About ExpressWing
          </h2>
          <p data-aos="zoom-in" data-aos-duration="2500">
            ExpressWing is a reliable bus booking website that provides easy and
            convenient booking options for travelers across India. Our aim is to
            make your travel experience comfortable and hassle-free.
          </p>
        </div>
        {/* ------------------Fifth Container----------------- */}
        <div className="second_container bg_color_3">
          <h2 data-aos="fade-zoom-in" className="tag_line">
            Travel with ease, book with ExpressWing
          </h2>
        </div>
        {/* --------------------------Contact form------------------------------ */}
        <ContactForm />
      </section>
    </>
  );
}
