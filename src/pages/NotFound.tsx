
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-light mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-accent mb-6">Page Not Found</h2>
      <p className="text-slate text-center mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="button-primary py-2 px-8">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
