"use client";

import { SignUp, SignIn } from "@clerk/nextjs";
import React from "react";

function AuthModal({showAuthModal, setShowAuthModal}: {showAuthModal: boolean, setShowAuthModal: (show: boolean) => void}) {
  const [authMode, setAuthMode] = React.useState<"sign-in" | "sign-up" | null>(null);

  const onClose = () => {
    setShowAuthModal(false);
    setAuthMode(null);
  }


  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md opacity-100 transition-all">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold focus:outline-none"
        onClick={() => onClose()}
        aria-label="Close"
      >
        ×
      </button>

      {!authMode ? (
        <>
          <h2 className="text-2xl text-gray-900 font-semibold mb-6 text-center">
            Welcome to <span className="text-blue-600">ApplyMate</span>
          </h2>

          <p className="text-sm text-gray-600 mb-6 text-center">
            Sign in or create a new account to start generating cover letters.
          </p>

          <div className="flex flex-col gap-4">
            <button
              className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
              onClick={() => setAuthMode("sign-in")}
            >
              Continue with Sign In
            </button>
            <button
              className="bg-gray-100 text-blue-700 py-3 rounded-lg border border-blue-500 hover:bg-gray-200 transition-all font-medium text-base"
              onClick={() => setAuthMode("sign-up")}
            >
              Continue with Sign Up
            </button>
          </div>
        </>
      ) : authMode === "sign-in" ? (
        <div className="pt-4 ">
          <SignIn forceRedirectUrl="/dashboard" routing="hash" />
        </div>
      ) : (
        <div className="pt-4">
          <SignUp forceRedirectUrl="/dashboard"/>
        </div>
      )}
    </div>
  );
}

export default AuthModal;