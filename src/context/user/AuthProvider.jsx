import React, { useEffect, useState } from "react";
import { currentUserDetail, isLoggedIn } from "../../authorization/auth";

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    data: {},
    login: false,
  });

  useEffect(() => {
    setUser({
      data: currentUserDetail(),
      login: isLoggedIn(),
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
