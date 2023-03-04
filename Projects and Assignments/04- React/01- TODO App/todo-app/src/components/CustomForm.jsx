const CustomForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <h1>hello</h1>
      </div>
    </form>
  );
};

export default CustomForm;
