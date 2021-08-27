import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAKF4-_HrkL9eEaQ9RYtQH3axkFIuLKUbW_wBqunLclw3JMVMDYgO4poZz8tdNy5UYtA&usqp=CAU"
          alt="Logo Growdev"
        />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
