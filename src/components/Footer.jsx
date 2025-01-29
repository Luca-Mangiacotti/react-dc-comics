import NavigationFootBot from "../../data/NavigationFootBot";

export default function Footer() {
  return (
    <footer>
      <section className="footerTop">
        <div className="container">
          <div className="footList">
            <ul>
              <h3>Lista</h3>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
            </ul>
            <ul>
              <h3>Lista</h3>
              <li>elem</li>
              <li>elem</li>
            </ul>
            <ul>
              <h3>Lista</h3>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
            </ul>
            <ul>
              <h3>Lista</h3>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
              <li>elem</li>
            </ul>
          </div>
          <div className="img-foot"></div>
        </div>
      </section>
      <div className="footerBottom">
        <div className="container row">
          <button className="btn-foot">Sign-up now!</button>
          <nav className="row">
            <h3>FOLLOW US</h3>
            <ul className="row">
              {NavigationFootBot.map((elm) => {
                return (
                  <li key={elm.id}>
                    <img src={elm.url} alt={elm.name} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
