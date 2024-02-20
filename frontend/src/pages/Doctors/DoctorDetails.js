import React, { useState } from "react";
import "./DoctorDetails.css";
import doctorImg from "../../assets/Images/doctor-img02.png";
import star from "../../assets/Images/star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/loader/loading.js'
import Error from '../../components/error/Error.js'
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const {id} = useParams();
  const {data: doctor, loading, error} = useFetchData(`${BASE_URL}/doctors/${id}`);
  const {name,qualifications,experiences,timeSlots,reviews,bio,about,averageRating,totalRating,specialization,ticketPrice} = doctor;

  return (
    <>
      <section>
        <div className="doctor">
        {loading && <Loader />}
        {error && <Error />}
          {!loading && !error &&
          <div className="details">
            <div className="detail">
              <div className="image">
                <img src={doctorImg} />
                <div className="special">
                  <span className="specialization">{specialization}</span>
                  <h3>{name}</h3>
                  <div className="rating">
                    <span className="star">
                      <img src={star} />
                      {averageRating}({totalRating})
                    </span>
                  </div>
                  <p>
                    {bio}
                  </p>
                </div>
              </div>
              <div className="about">
                <button
                  onClick={() => {
                    setTab("about");
                  }}
                  className={`${tab === "about"}`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${tab === "feedback"}`}
                >
                  Feedback
                </button>
              </div>
              <div>
                {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
                {tab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>
            <div className="sidepanel">
              <SidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots} />
            </div>
          </div>}
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;
