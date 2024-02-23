const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : Pune</h3>
      <h4>Contact : arihantphad2@gmail.com</h4>
    </div>
  );
};

export default User;
