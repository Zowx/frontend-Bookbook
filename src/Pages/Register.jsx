import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const navigate = useNavigate();

  const handleSubmit = (inscription) => {
    inscription.preventDefault(); // Empêcher le rechargement de la page

    // Ajouter une vérification si la case est cochée avant de faire la requête
    if (!check) {
      console.log("Acceptez les conditions pour continuer");
      return; // Ne rien faire si la case n'est pas cochée
    }

    fetch(`http://localhost:3001/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 250);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="body-connexion" className="App bg-slate-100 min-h-screen px-5 pb-8 flex w-full h-full items-center content-center">
      <div id="box-connexion" className="bg-white shadow-md rounded-xl p-12 border-solid border border-slate-300 max-w-2xl m-auto">
        <h1 className="font-titles text-3xl font-bold">Créez un compte...</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label className="font-texts block" htmlFor="name">
            Votre nom d'utilisateur <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            id="name"
            className="border-solid border border-slate-300 p-2 rounded-md w-full h-10 mt-1"
            type="text"
            placeholder="Exemple : DUPOND"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="font-texts block mt-4" htmlFor="email">
            Votre email <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            id="email"
            className="border-solid border border-slate-300 p-2 rounded-md w-full h-10 mt-1"
            type="email"
            placeholder="Exemple : jp.dupond@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
          <label className="font-texts block mt-4" htmlFor="password">
            Votre mot de passe <span className="text-red-500 text-sm">*</span>
          </label>
          <input
            id="password"
            className="border-solid border border-slate-300 p-2 rounded-md w-full h-10 mt-1"
            type="password"
            placeholder="Saisissez 8 caractères minimum s'il vous plaît"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="border border-solid border-slate-300 w-5 h-5"
              checked={check}
              onChange={handleCheck}
            />
            <p className="font-texts font-base pl-2">
              J'accepte les Conditions générales et la Politique de confidentialité
            </p>
          </div>
          <div className="flex justify-center py-4">
            <button
              type="submit"
              className={`w-full h-11 font-titles font-bold text-white rounded-full ${check ? "bg-gradient-to-r from-[#0f172a] via-[#1C2953] to-[#0f172a]" : "bg-gray-400 opacity-50 cursor-not-allowed"}`}
              disabled={!check} // Désactiver le bouton si la case n'est pas cochée
            >
              Créer un compte
            </button>
          </div>
          <div className="flex justify-center pt-4">
            <NavLink to="/login">
              <button
                type="button"
                className="text-blue-900 font-texts font-bold pl-3"
              >
                Retour
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
