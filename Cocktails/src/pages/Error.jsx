import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="errorSection">
      <h1 className="errorTitle">Oops ! Its a dead End</h1>
      <Link to="/" className="errorBtn">Back Home</Link>
    </section>
  );
}

export default Error;
