export default function Btn({ children, type = "" }) {
  const types = {
    primary: "btn btnPrimary",
    error: "btn btnError",
    absolute: "btn btnAbsolute",
  };
  return <button className={types[type]}>{children}</button>;
}
