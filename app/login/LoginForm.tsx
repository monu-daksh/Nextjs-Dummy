"use client";
import { useState } from "react";

export default function BadLogin() {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    data[e.target.name] = e.target.value;
    setData(data);
  };

  const login = () => {
    if (data.username == "" || data.password == "") {
      setError("fields required");
    }

    if (data.username == "admin" && data.password == "1234") {
      alert("Login success");
    } else {
      alert("Login failed");
    }

    console.log("User:", data);
  };

  return (
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white p-4 rounded shadow w-80">
          <h1 className="text-xl mb-4">Login</h1>

          {}
          <input
              type="text"
              name="username"
              placeholder="username"
              className="border w-full mb-2 p-2"
              onChange={handleChange}
          />

          <input
              type="password"
              name="password"
              placeholder="password"
              className="border w-full mb-2 p-2"
              onChange={handleChange}
          />

          {}
          {error && <p className="text-red-500">{error}</p>}

          <button
              className="bg-blue-500 text-white px-4 py-2 w-full"
              onClick={login}
          >
            Login
          </button>

          {}
          <p style={{ marginTop: "10px" }}>Forgot password?</p>
        </div>
      </div>
  );
}