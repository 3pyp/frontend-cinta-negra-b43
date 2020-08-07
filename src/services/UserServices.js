import axios from "axios";

const base_url = "https://cinta-negra-b43.herokuapp.com/api/v1";
const token =
  "myapp eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ3Jpc3RpYW4iLCJpZCI6IjVmMjhjY2NlZGFmZmMxMTg5ZmI4MzA4NCIsImVtYWlsIjoiY3Jpc3RpYW5AdGVzdC5jb20iLCJpYXQiOjE1OTY3Njg5MzUsImV4cCI6MTU5Njg1NTMzNX0.h3u4Lo7Ub2DDN0QXeZZkF0tJZu7cwUve2dFfu6KgjOg";

export async function getUsers() {
  try {
    const { data } = await axios.get(`${base_url}/users`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function registerUser(user, props) {
  try {
    await axios.post(`${base_url}/users`, user);
    props.history.push("/users");
  } catch (error) {
    return error;
  }
}
