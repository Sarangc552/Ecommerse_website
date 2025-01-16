import React from "react";
import sliderbg from "./picture/slider-bg.jpg";
import "./banner.css";

const Banar = () => {
  return (
    <div>
      <div className="bannar-page row">
        <div className="bannar-image col-lg-12 col-md-12 col-sm-12 position-relative">
          <img src={sliderbg} alt="Sale Banner" className="img-fluid" />

          <div className="bannar-text">
            <h1>
              Sale 20% Off <br />{" "}
              <span style={{ color: "#002c3e" }}>On Everything</span>
            </h1>
            <p>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <button className="shop-btn">
              Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
