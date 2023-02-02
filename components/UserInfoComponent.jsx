function UserInfoComponent(props) {
  const { name, email, username, phone, website, company, address } =
    props.data;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
          <p className="card-text">
            <ul className="list-group list-group-flush">
              <b>Address:</b>
              <li className="list-group-item">Street:{address.street}</li>
              <li className="list-group-item">Street:{address.suit}</li>
              <li className="list-group-item">Street:{address.city}</li>
              <li className="list-group-item">Street:{address.zipcode}</li>
            </ul>
          </p>
          <a href="#" className="card-link">
            {email}
          </a>
          <a href="#" className="card-link">
            {phone}
          </a>
        </div>
      </div>
    </>
  );
}

export default UserInfoComponent;
