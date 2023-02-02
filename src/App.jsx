import ClassComponentExample from "../components/ClassComponentExample";
import ProductCart from "../components/ProductCart";
import UserInfoComponent from "../components/UserInfoComponent";
import { users } from "../utils/loadUsers";
export default function App() {
  console.log(users);
  return (
    <div className="container">
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-lg-4">
              <UserInfoComponent data={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
