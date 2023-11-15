import { useGlobalContext } from "./Context";

function Hero() {
  const { subMenuClose } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={subMenuClose}>
      <div className="hero-center">
        <article className="hero-info">
          <div className="hero-details">
            <h1>Payments Infrastructure for Internet</h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className="btn">Start now</button>
          </div>

          <div className="mobileImg">
            <img
              src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/final/src/images/phone.svg"
              alt="mobileImg"
            />
          </div>

        </article>
      </div>
    </section>
  );
}

export default Hero;
