import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Book" element={<BookList />} />
        <Route path="/Book/:id" element={<Book />} /> */}
        // Nested Routes
        <Route path="/book">
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
