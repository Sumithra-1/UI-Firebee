/* External package import */
import React from "react";
/* External package import */

/* internal file import */
import Guarantee from "../../assets/images/Guarantee.png";
import SignalBackground from "../../assets/images/SignalBackground.png";
import BedTime from "../../assets/images/BedTime.png";
import GreenTick from "../../assets/images/GreenTick.png";
import GreenTickwithStroke from "../../assets/images/GreenTickwithStroke.png";
import DeepSleep from "../../assets/images/DeepSleep.png";
import Relax from "../../assets/images/Relax.png";
import Clam from "../../assets/images/Clam.png";
import Focus from "../../assets/images/Focus.png";
import Happy from "../../assets/images/Happy.png";
import Alert from "../../assets/images/Alert.png";
import BookRead from "../../assets/images/BookRead.png";
import Logo from "../../assets/images/Logo.png";
import ProductBox from "../../assets/images/ProductBox.png";
import GQ from "../../assets/images/GQ.png";
import Theguardian from "../../assets/images/Theguardian.png";
import TheNewYorkTimes from "../../assets/images/TheNewYorkTimes.png";
import Mashable from "../../assets/images/Mashable.png";
import CNN from "../../assets/images/CNN.png";
import TheWallStreetJournal from "../../assets/images/TheWallStreetJournal.png";
/* internal file import */

/* custom styles */
import "./styles/productContainerStyle.css";
/* custom styles */

/* static json data */
const data = {
  sections: [
    {
      image: Guarantee,
      title: "30 Day Money Back Guarantee",
      text: "At Firebee we believe in building quality products that actually work. Firebee and its partners have invested over $85 million in research and development to create the highest quality wearable for customers to enjoy. If for any reason you are not satisfied with your Firebee headband, we will happily refund your purchase.",
    },
    {
      image: SignalBackground,
      title: "Firebee Signals",
      text: "A signal for every situation",
    },
  ],
  signals: [
    {
      image: BedTime,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: DeepSleep,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Relax,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Clam,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Focus,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Happy,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Alert,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
    {
      image: Logo,
      text: "Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.",
    },
  ],
  benefits: [
    {
      icon: GreenTickwithStroke,
      text: "Can’t sleep? Turn on the <span class='deep-sleep font-weight-bold '>deep sleep</span> signal",
    },
    {
      icon: GreenTick,
      text: "Feeling tired? Turn on the <span class='alert-gradient font-weight-bold'>alert</span> signal",
    },
    {
      icon: GreenTick,
      text: "Feeling anxious? Turn on the <span class='calm-gradient font-weight-bold'>calm</span> signal",
    },
    {
      icon: GreenTick,
      text: "Feeling unproductive? Turn on the <span class='focus-gradient font-weight-bold'>focus</span> signal",
    },
    {
      icon: GreenTick,
      text: "Feeling blue? Turn on the <span class='happy-gradient font-weight-bold'>happy</span> signal",
    },
  ],
  boxContents: [
    { icon: GreenTick, text: "1 Firebee headband" },
    { icon: GreenTick, text: "1 Charging cable" },
    { icon: GreenTick, text: "1 User manual" },
  ],
  featuredOn: [
    GQ,
    Theguardian,
    TheNewYorkTimes,
    Mashable,
    CNN,
    TheWallStreetJournal,
  ],
};
/* static json data */

const SectionTwoContainer = () => {
  return (
    <React.Fragment>
      {data.sections.map((section, index) => (
        <div key={index} className="mt-4 container-space">
          <div className="row bg-sesction2 p-3">
            <div className="col-md-4 col-12">
              <div className="w-150-res">
                <img
                  src={section.image}
                  className="text-center DayImg1"
                  alt="pay1"
                />
              </div>
            </div>
            <div className="col-md-8 col-12 text-left p-1">
              <h3 className="font-weight-normal">{section.title}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="container mt-4 p-4">
        <div className="row">
          {data.signals.map((signal, index) => (
            <div
              key={index}
              className="col-md-4 col-12 bg-sesction2 bg-bor-solid"
            >
              <div className="row p-0">
                <div className="col-md-4 col-12">
                  <div className="w-150-res">
                    <img
                      src={signal.image}
                      className="text-center signal-img"
                      alt="signal"
                    />
                  </div>
                </div>
                <div className="col-md-8 col-12 text-left p-1">
                  <p className="font-14 mt-2 mb-2">{signal.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Adding the last static column outside of the loop */}
          <div className="col-md-4 col-12">
            <div className="w-150-res">
              <img
                src={SignalBackground}
                className="text-center DayImg w-fill-avail"
                alt="pay1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <div className="row bg-sesction2 p-3">
          <h3 className="font-weight-normal">What will Firebee do for me?</h3>
          <p className="font-14">
            Firebee will help you gently nudge yourself into a different mental
            state
          </p>
          <div className="col-md-5 col-12">
            <div className="w-150-res">
              <img src={BookRead} className="text-center book-img" alt="pay1" />
            </div>
          </div>
          <div className="col-md-7 col-12 text-left p-1">
            <ul className="list-unstyled font-14 mt-4 p-3">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <img
                    src={benefit.icon}
                    className="me-2 tick-img"
                    alt="tick"
                  />

                  <span dangerouslySetInnerHTML={{ __html: benefit.text }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="row bg-sesction2 p-3">
          <h3 className="font-weight-normal">What’s in the box?</h3>

          <div className="w-150-res">
            <img
              src={ProductBox}
              className="text-center pro-image"
              alt="pay1"
            />
            <p className="font-14 mb-0">FEATURED ON</p>
          </div>

          <div className="container mt-0">
            <div className="row d-flex justify-content-between payment-space">
              {data.featuredOn.map((feature, index) => (
                <div key={index} className="col">
                  <img src={feature} className="img-fluidBox" alt="feature" />
                </div>
              ))}
            </div>
            <hr />
            <div className="row p-3 tick-book">
              {data.boxContents.map((item, index) => (
                <div key={index} className="col-md-4 col-12">
                  <li className="d-flex align-items-center justify-content-center mb-2">
                    <img src={item.icon} className="me-2 tick-img" alt="tick" />
                    {item.text}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionTwoContainer;
