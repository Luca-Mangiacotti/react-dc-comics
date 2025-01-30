import NavigationFootBot from "../../data/NavigationFootBot";
import DcComicsFoot from "../../data/DcComicsFoot.jsx";
import DcFoot from "../../data/DcFoot.jsx";
import SitesFoot from "../../data/SitesFoot.jsx";
import ShopFoot from "../../data/ShopFoot.jsx";
import Btn from "./Btn.jsx";
export default function Footer() {
  return (
    <footer>
      <section className="footerTop">
        <div className="container">
          <div className="footList">
            <ul>
              <h3>dc comics</h3>
              {DcComicsFoot.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h3>dc</h3>
              {DcFoot.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h3>sites</h3>
              {SitesFoot.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h3>shop</h3>
              {ShopFoot.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="img-foot"></div>
        </div>
      </section>
      <div className="footerBottom">
        <div className="container row">
          <Btn type="foot">sign-up now!</Btn>
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
