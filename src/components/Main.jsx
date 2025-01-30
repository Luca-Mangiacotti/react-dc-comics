import Hero from "./Hero";
import Comics from "../../data/Comics";

export default function Main() {
  return (
    <main>
      <section className="contentMain">
        <div className="heroSec">
          <Hero url="../img/jumbotron.jpg" />
        </div>
        <div className="container">
          <button className="btn">Current Series</button>
          <section className="row">
            {Comics.map((product) => {
              return (
                <div key={product.id} className="card">
                  <div className="img-container">
                    <img
                      className="img-card"
                      src={product.thumb}
                      alt={product.title}
                    />
                  </div>
                  <p>{product.title}</p>
                </div>
              );
            })}
          </section>
        </div>
      </section>
      <nav className="navMain">
        <ul className="container row">
          <li>
            <img
              src="../img/buy-comics-digital-comics.png"
              alt="buy-comics-digital-comics"
            />
            <a href="">digital comics</a>
          </li>
          <li>
            <img
              src="../img/buy-comics-merchandise.png"
              alt="buy-comics-merchandise"
            />
            <a href="">dc Merchandise</a>
          </li>
          <li>
            <img
              src="../img/buy-comics-subscriptions.png"
              alt="buy-comics-subscriptions"
            />
            <a href="">subscription</a>
          </li>
          <li>
            <img
              src="../img/buy-comics-shop-locator.png"
              alt="buy-comics-shop-locator"
            />
            <a href="">comic shop locator</a>
          </li>
          <li>
            <img src="../img/buy-dc-power-visa.svg" alt="buy-dc-power-visa" />
            <a href="">dc power visa</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
