import * as React from "react";
import UserContext from "./userContext";
import { currentUserDetail, isAuthenticated } from "../../authorization/auth";

const AuthProvider = (props) => {
  const [user, setUser] = React.useState({
    data: {},
    login: false,
  });

  React.useEffect(() => {
    setUser({
      data: currentUserDetail(),
      login: isAuthenticated(),
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
