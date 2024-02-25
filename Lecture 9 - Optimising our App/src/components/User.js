import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : Pune</h3>
      <h4>Contact : arihantphad2@gmail.com</h4>
      <p>count : {count}</p>
      <p>count2 : {count2}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count +
      </button>
    </div>
  );
};

export default User;
