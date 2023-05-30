// isAuthenticated
export const isAuthenticated = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};

// doLogin
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

// doLogout
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

// currentUser
export const currentUserDetail = () => {
  if (isAuthenticated()) {
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return undefined;
  }
};

// token
export const getToken = () => {
  if (isAuthenticated()) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return undefined;
  }
};
