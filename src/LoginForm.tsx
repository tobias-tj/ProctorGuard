import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { universities, users } from "./types/data/universities";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.university === selectedUniversity
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(user));
      onLogin();
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Por favor verifica.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-4/5 max-w-4xl">
        <div
          className="hidden md:block w-1/2 rounded-l-lg"
          style={{
            backgroundImage: "url('/IMG_1091.JPG')",
            backgroundSize: "76% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            ¡Bienvenido!
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Selecciona tu universidad y accede a tu cuenta.
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Universidad</label>
            <select
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e76e50]"
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
            >
              <option value="">Selecciona una universidad</option>
              {universities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Correo</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e76e50]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e76e50]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Mensaje de error */}
          <div className="h-5 mb-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#f06d4c] text-white rounded-lg px-4 py-2 font-semibold hover:bg-[#f0623e] focus:outline-none focus:ring-2 focus:ring-[#e76e50]"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
      
      {/* Texto de Yvagacore en la tarjeta */}
      <p className="text-gray-500 text-sm mt-8">
        Power By YvagaCore
      </p>
    </div>
  );
};

export default LoginForm;