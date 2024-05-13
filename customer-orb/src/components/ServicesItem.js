import "./ServicesItem.css";

const ServicesItem = ({ image, text }) => {
  return (
    <div className="service-item-container">
      <div className="service-image-container">
        <img
          src={require(`../constants/${image}.png`)}
          alt="Services"
          className="service-image"
        />
      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default ServicesItem;
