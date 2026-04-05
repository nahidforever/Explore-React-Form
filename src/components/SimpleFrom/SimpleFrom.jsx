import React from "react";

const SimpleFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    console.log(name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="email" name="email" placeholder="Your Mail" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleFrom;
