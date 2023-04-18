const Button = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        button
      </button>
    </div>
  );
};

export default Button;
