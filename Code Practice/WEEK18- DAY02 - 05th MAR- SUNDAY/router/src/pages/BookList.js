import { Link } from "react-router-dom";

// custom dynamic routers
export function BookList() {
  return (
    <>
      <h1>BookList</h1>
      <Link to="/book/1">Book 1</Link>
      <Link to="/book/2">Book 2</Link>
    </>
  );
}
