import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    console.log(name, email);
  };
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="email" name="email" placeholder="Your Mail" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
