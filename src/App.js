import { Route, Routes, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);
export default App;
