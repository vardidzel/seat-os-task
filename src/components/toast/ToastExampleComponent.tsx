import React from "react";
import { useToast } from "../../hooks/useToast";

const ToastExampleComponent = () => {
  const { showToast } = useToast();
  const handleClick = () => {
    showToast({
      status: "success",
      title: "Success!",
      position: "top-right", // Optional: defaults to 'top-right' if not provided
      message: "Form submitted successfully!",
      duration: 5000, // Optional: default to 5000ms if not provided
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Submit Form</button>
    </div>
  );
};
export default ToastExampleComponent;
