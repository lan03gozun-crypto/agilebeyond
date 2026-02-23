import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleAuthRedirect() {
    navigate("/auth");
    setOpen(false);
  }

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {user ? (
          <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
            Agile online store
          </Link>
        ) : (
          <span className="navbar-brand disabled" onClick={handleAuthRedirect}>
            Agile online store
          </span>
        )}

        <button
          className="navbar-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <div className="navbar-links">
            {user ? (
              <Link to="/" className="navbar-link" onClick={handleLinkClick}>
                Home
              </Link>
            ) : (
              <span className="navbar-link disabled" onClick={handleAuthRedirect}>
                Home
              </span>
            )}

            {user ? (
              <Link to="/checkout" className="navbar-link" onClick={handleLinkClick}>
                Cart
              </Link>
            ) : (
              <span className="navbar-link disabled" onClick={handleAuthRedirect}>
                Cart
              </span>
            )}
          </div>

          <div className="navbar-auth">
            {!user ? (
              <div className="navbar-auth-links">
                <Link to="/auth" className="btn btn-secondary" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to="/auth" className="btn btn-primary" onClick={() => setOpen(false)}>
                  Signup
                </Link>
              </div>
            ) : (
              <div className="navbar-user">
                <span className="navbar-greeting">Hello, {user.email}</span>
                <button className="btn btn-secondary" onClick={() => { logout(); setOpen(false); }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
