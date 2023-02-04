function Button(props) {
  let btnvar = props.btnVarient ? props.btnVarient : "primary";
  return (
    <>
      <button className={`btn btn-${btnvar}`}> {props.name}</button>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

export default Button;
