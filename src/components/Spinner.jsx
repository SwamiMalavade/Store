export const Spinner = () => {
  return (
    <div className="container text-center my-5">
      <button
        className="btn btn-primary justify-content-center"
        type="button"
        disabled
      >
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>{" "}
        Loading...
      </button>
    </div>
  );
};
