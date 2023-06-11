import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import Calendar_component from "../../components/Calendar/Calendar";

export default function Homepage() {
  function handleSearch() {
    // alert("search button clicked");
    console.log("Search button clicked");
  }

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="container">
          <h1>Bus Ticket Booking Online</h1>
          <h2>Book Bus Tickets in India</h2>
          <div className="searchBox align-middle">
            <div className="box align-center">
              <input type="text" placeholder="From" />
              <FontAwesomeIcon icon={faCity} />
            </div>
            <div className="box align-center">
              <input type="text" placeholder="To" />
              <FontAwesomeIcon icon={faCity} />
            </div>
            <div className="box align-center">
              <div>
                <Calendar_component />
              </div>
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="box align-center">
              <button className="btn" type="submit" onClick={handleSearch}>
                Search Buses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
