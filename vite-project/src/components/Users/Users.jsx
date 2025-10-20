import UserList from "./UserList/UserList";
import "./Users.css"

function Users({users}) {
  return (
    <div className="user-list-container">
      <h1>Users List</h1>
     <UserList users ={users}/>
    </div>
  );
}

export default Users;