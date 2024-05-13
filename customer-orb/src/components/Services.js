import ServicesItem from "./ServicesItem";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-root" id="services">
      <div>
        <h1>Our Services</h1>
        <h3>Click on the icons to see more!</h3>
      </div>
      <div className="services-container">
        <ServicesItem image={"developer"} text={"Software Development"} />
        <ServicesItem image={"customer-service"} text={"Customer Service"} />
        <ServicesItem image={"operations"} text={"Operations Consultancy"} />
      </div>
    </div>
  );
};

export default Services;
