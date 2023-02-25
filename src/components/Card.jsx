export const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top p-5 "
        alt="Image Not Found"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.category}</p>
        <p className="card-text">{props.desc}</p>
        <p className="card-text fw-bold">Price: {props.price}</p>
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
};
