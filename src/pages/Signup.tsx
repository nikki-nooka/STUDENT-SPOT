import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
      console.error("Google Sign-Up Error:", err?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Create an Account at <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Join our vibrant student community to share notes, collaborate, and access exclusive resources.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
        >
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold border border-gray-300">
            G
          </span>
          <span className="font-medium text-gray-800">
            {loading ? "Creating account..." : "Sign up with Google"}
          </span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
