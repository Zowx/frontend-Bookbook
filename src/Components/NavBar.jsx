import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Tableau des liens dynamiques
  const navLinks = [
    { name: "Liste des livres", path: "/catalogue" },
    { name: "Abonnement", path: "/abonnement" },
    { name: "Gestion de la bibliothèque", path: "/gestion-de-la-bibliothèque" },
    { name: "Favoris", path: "/favoris" },
    { name: "Historique des lectures", path: "/historique-des-lectures" },
    { name: "Don de livres", path: "/don-de-livres" },
  ];

  return (
    <>
      {/* CSS directement dans le composant */}
      <style>
        {`
                /* Police spécifique pour le logo */
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap'); /* Police littéraire et élégante */

                .navbar-logo {
                    font-family: 'Cinzel', serif; /* Police spécifique pour le logo */
                }

                .menu {
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 20px;
                }

                .hamburger {
                    display: none;
                }

                @media (max-width: 768px) {
                    .menu {
                        display: none;
                        flex-direction: column;
                        gap: 10px;
                    }

                    .menu.open {
                        display: flex;
                    }

                    .hamburger {
                        display: block;
                        background: transparent;
                        border: none;
                        color: white;
                        font-size: 24px;
                        cursor: pointer;
                    }
                }
                `}
      </style>

      <div
        style={{
          backgroundImage: "linear-gradient(90deg, #0f172a, #1C2953, #0f172a)",
          color: "white",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Poppins', sans-serif",
          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link to="/">
        <div
          className="navbar-logo"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            letterSpacing: "1px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Book<span style={{ color: "#FFD700" }}>Book</span>
        </div>
        </Link>

        {/* Menu Links */}
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "5px 10px",
                  display: "block",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#FFD700")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Barre de recherche et bouton */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Link to="/createBook">
            <button
              style={{
                backgroundImage: "linear-gradient(90deg, #2563eb, #3B82F6)",
                color: "white",
                padding: "10px 25px",
                borderRadius: "30px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
              }}
            >
              Ajouter un livre
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
