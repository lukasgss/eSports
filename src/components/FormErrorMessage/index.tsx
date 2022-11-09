import React from "react";

interface FormErrorMessage {
  error: string | undefined;
}

const FormErrorMessage = ({ error }: FormErrorMessage) => {
  return (
    <div>
      <p className="text-primary-pink text-sm">{error}</p>
    </div>
  );
};

export default FormErrorMessage;
