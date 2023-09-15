import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/style.scss";

const Card = ({ data }) => {
  //   console.log(data[0].src.large);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center container-fluid">
      {data.map((item, index) => {
        return (
          <div className="card mt-4" key={index} style={{ width: "400px" }}>
            <div className="img-div" style={{ height: "40vh" }}>
              <img src={item.src.large} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <p className="card-text">{item.photographer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
