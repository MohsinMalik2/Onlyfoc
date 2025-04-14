import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CTAButtonProps {
  label: string;
  route: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, route }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className="mt-8 px-6 py-3 bg-primary-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-700 transition"
    >
      {label}
    </button>
  );
};

export default CTAButton;