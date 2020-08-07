import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

function UserView() {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (state.users.length <= 0) {
      const { data } = await axios.get(
        "https://cinta-negra-b43.herokuapp.com/api/v1/users",
        {
          headers: {
            Authorization:
              "myapp eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ3Jpc3RpYW4iLCJpZCI6IjVmMjhjY2NlZGFmZmMxMTg5ZmI4MzA4NCIsImVtYWlsIjoiY3Jpc3RpYW5AdGVzdC5jb20iLCJpYXQiOjE1OTY2ODE1OTksImV4cCI6MTU5Njc2Nzk5OX0.m1P0myYOj6thdg6VA4hlViocbh_xfwVtFSNWnWLmOdM",
          },
        }
      );
      setState({
        ...state,
        users: data.users,
      });
    }
  };

  const renderUsers = () => {
    if (state.users.length > 0) {
      return state.users.map((user) => (
        <UserCard key={user._id} name={user.name} email={user.email} />
      ));
    } else {
      return <h3>Cargando usuarios...</h3>;
    }
  };

  return <div className="Users">{renderUsers()}</div>;
}

export default UserView;
