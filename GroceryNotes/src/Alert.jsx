function Alert() {
// Function to format alert messages
  const alertFunction = (crud) => {
    return crud;
  };
  return (
    <>(
        <p
          style={{
            width: "530px",
            margin: "0 auto",
            marginBottom: "10px",
            textAlign: "center",
            backgroundColor: bgColor,
          }}
        >
          {alertFunction(variable)}
        </p>
      )
      
    </>
  )
}

export default Alert
