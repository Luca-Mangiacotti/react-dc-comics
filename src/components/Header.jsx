import NavigationHead from "../../data/NavigationHead";
export default function Header() {
  return (
    <header>
      <div className="container row">
        <img src="..\img\dc-logo.png" alt="" />
        <nav>
          <ul className="row">
            {NavigationHead.map((link) => {
              return (
                <li key={"link.id"}>
                  <a href="{link.url}">{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
