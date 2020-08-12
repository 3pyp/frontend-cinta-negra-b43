export const verifyToken = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};
