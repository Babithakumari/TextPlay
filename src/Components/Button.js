export default function Button(prop) {
  const HandleUpClick = () => {
    console.log("Up button was clicked");
  };
  return (
    <div className="buttonItem">
      <button onClick={HandleUpClick}>{prop.action}</button>
    </div>
  );
}
