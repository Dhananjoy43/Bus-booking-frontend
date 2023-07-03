import { useNavigate } from "react-router-dom";
import "./SearchBus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faRightLeft,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import Calendar_component from "../../components/Calendar/Calendar";

export default function SearchBus() {
  const navigate = useNavigate();
  function handleSearch() {
    navigate("/searchbus");
  }

  return (
    <>
      <Navbar />
      <section className="home">
        {/* <!-------------Search section---------------> */}
        <div className="container">
          <div className="searchBox align-center">
            <div className="box">
              <input type="text" placeholder="From City" />
              <FontAwesomeIcon icon={faCity} />
            </div>
            <div className="round-box align-center">
              <FontAwesomeIcon icon={faRightLeft} />
            </div>
            <div className="box ">
              <input type="text" placeholder="To City" />
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

        {/* ------------*****--------------Search results-------------*****----------------- */}
        <div className="result_container">
          {/* -------left container -------------*/}
          <div className="left">
            <h3>Filters</h3>

            {/* Filter based on Bus Types */}
            <div className="filter_box">
              <h4>Bus Type</h4>
              <div className="input_box">
                <input type="checkbox" name="AC" id="AC" />
                <label htmlFor="AC">AC</label>
              </div>
              <div className="input_box">
                <input type="checkbox" name="nonAC" id="nonAC" />
                <label htmlFor="nonAC">Non AC</label>
              </div>
              <div className="input_box">
                <input type="checkbox" name="sleeper" id="sleeper" />
                <label htmlFor="sleeper">Sleeper</label>
              </div>
            </div>

            {/* Filter based on timing */}
            <div className="filter_box">
              <h4>Depurture Time</h4>
              <div className="input_box">
                <input
                  type="checkbox"
                  name="early_morning"
                  id="early_morning"
                />
                <label htmlFor="early_morning">12 am to 6 am</label>
              </div>
              <div className="input_box">
                <input type="checkbox" name="morning" id="morning" />
                <label htmlFor="morning">6 am to 12 pm</label>
              </div>
              <div className="input_box">
                <input type="checkbox" name="afternoon" id="afternoon" />
                <label htmlFor="afternoon">12 pm to 6 pm</label>
              </div>
              <div className="input_box">
                <input type="checkbox" name="night" id="night" />
                <label htmlFor="night">6 pm to 12 am</label>
              </div>
            </div>

            {/* Filter based on Seat availibility */}
            <div className="filter_box">
              <h4>Seat Availability</h4>
              <div className="input_box">
                <input type="checkbox" name="available" id="available" />
                <label htmlFor="available">Available Only</label>
              </div>
            </div>
          </div>

          {/* right container */}
          <div className="right">
            {/* for (let i = 0; i < 5; i++) { */}

            <div className="date_card">
              <h4>Monday</h4>
              <h4>28</h4>
            </div>
            {/* } */}
          </div>
        </div>
        <h1>HELLO</h1>
      </section>
    </>
  );
}
