export default function EventComponent() {
  function handler() {
    alert("hello from event");
  }
  function formatText(e) {
    e.target.style.color = "red";
    e.target.style.color = "red";
  }
  function resetText(e) {
    e.target.style.color = "black";
  }
  return (
    <>
      <p
        className="fs-3"
        onClick={handler}
        onMouseOver={formatText}
        onMouseOut={resetText}
      >
        i want to be clicked
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas
        culpa asperiores repellendus reprehenderit optio quidem placeat,
        corporis mollitia alias fuga velit. Dolorem reiciendis mollitia
        asperiores nemo sint aut itaque.
      </p>
    </>
  );
}
