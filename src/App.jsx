import ClassComponentExample from "../components/ClassComponentExample";
import Counter from "../components/Counter";
import EventComponent from "../components/EventComponent";
import ProductCart from "../components/ProductCart";
import UserInfoComponent from "../components/UserInfoComponent";
import Button from "../ui_components/Button";
import { users } from "../utils/loadUsers";
export default function App() {
  console.log(users);
  return (
    <div className="container">
      <Button name="click me" btnVarient="" />
      <Counter />
      <EventComponent />
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-lg-4">
              <UserInfoComponent data={user} key={user.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
