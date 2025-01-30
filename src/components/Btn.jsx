export default function Btn({ children, type = "" }) {
  const types = {
    primary: "btn btnPrimary",
    error: "btn btnError",
    absolute: "btn btnAbsolute",
    foot: "btn btnFoot",
  };
  return <button className={types[type]}>{children}</button>;
}
