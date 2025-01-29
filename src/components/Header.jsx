const navigationHead = [
  {
    id: 1,
    url: "#",
    title: "characters",
    current: false,
  },
  {
    id: 2,
    url: "#",
    title: "comics",
    current: true,
  },
  {
    id: 3,
    url: "#",
    title: "movies",
    current: false,
  },
  {
    id: 4,
    url: "#",
    title: "tv",
    current: false,
  },
  {
    id: 5,
    url: "#",
    title: "games",
    current: false,
  },
  {
    id: 6,
    url: "#",
    title: "collectibles",
    current: false,
  },
  {
    id: 7,
    url: "#",
    title: "videos",
    current: false,
  },
  {
    id: 8,
    url: "#",
    title: "fans",
    current: false,
  },
  {
    id: 9,
    url: "#",
    title: "news",
    current: false,
  },
  {
    id: 10,
    url: "#",
    title: "shop",
    current: false,
  },
];

export default function Header() {
  return (
    <header>
      <div className="container row">
        <img src="..\img\dc-logo.png" alt="" />
        <nav>
          <ul className="row">
            {navigationHead.map((link) => {
              return (
                <li key={"link.id"}>
                  {" "}
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
