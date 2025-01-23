import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleConnexion = (e) => {
    e.preventDefault();

    // Route backend de connexion
    fetch(`http://localhost:3001/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then((response) => response.json())
    .then((res) => {
        // Vérification de la réponse
        if (res.token) {
            // Stocker le token dans le localStorage
            localStorage.setItem("token", res.token);

            // Rediriger l'utilisateur vers la page d'accueil ou une autre page
            navigate("/");
        } else {
            setError("Login failed: Token not found");
        }
    })
    .catch((err) => {
        console.error("Login failed:", err);
        setPassword("");
        setError("Adresse email ou mot de passe incorrect");
    });
  };

  return (
    <div id="body-connexion" className="App bg-slate-100 min-h-screen flex items-center px-5 pb-8">
      <div id="box-connexion" className="bg-white shadow-md rounded-xl p-12 border-solid border border-slate-300 max-w-2xl m-auto">
        <h1 className="font-titles text-3xl font-bold">Content de vous revoir</h1>
        <br />
        <form onSubmit={handleConnexion} autoComplete="off">
          <label className="font-texts block" htmlFor="email">Votre email</label>
          <input
            id="email"
            className="border-solid border border-slate-300 p-2 rounded-md w-full h-10 mt-1"
            type="email"
            autoComplete="email"
            placeholder="exemple : dupond@mail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password" className="block mt-4">Votre mot de passe</label>
          <input
            id="password"
            className="border-solid border border-slate-300 p-2 rounded-md w-full h-10 mt-1"
            type="password"
            autoComplete="password"
            placeholder="Entrez un mot de passe"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); 
            }}
          />
          
          {error && (
            <p className="font-texts font-bold text-red-700">{error}</p>
          )}
          
          <NavLink to="/forgot-password">
            <p className="forgot-password text-blue-900 font-texts font-bold">Mot de passe oublié ?</p>
          </NavLink>
          <br />
          
          <div className="flex justify-center">
            <button
              id="seconnecter-button"
              type="submit"
              className="px-5 py-1 rounded-full font-semibold bg-gradient-to-r from-[#0f172a] via-[#1C2953] to-[#0f172a] text-slate-100 w-full h-11"
            >
              Se connecter
            </button>
          </div>
        </form>

        <br />
        <div className="flex justify-center items-center gap-4 opacity-20">
          <div className="bg-current h-0.5 w-1/2" />
          <p className="pb-1">ou</p>
          <div className="bg-current h-0.5 w-1/2" />
        </div>
        <br />
        
        <span>Vous n'avez pas encore de compte ?</span>
        <NavLink to="/register">
          <span className="text-blue-900 font-texts font-bold pl-3">Créer un compte</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
