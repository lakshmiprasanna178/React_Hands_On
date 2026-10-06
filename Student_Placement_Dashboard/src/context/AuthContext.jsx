import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const addApplication = (application) => {
    setApplications((previousApplications) => [
      ...previousApplications,
      application,
    ]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        applications,
        addApplication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };