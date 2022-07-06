import React, { useState, useEffect } from "react";
import { isLoggedIn, removeToken } from "../services";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
export const Navbar = () => {
  const [state, setState] = useState({ page: 1 });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleChange = (page) => {
    setState({ page });
  };

  useEffect(() => {
    setUser(isLoggedIn());
  }, []);

  const logout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <React.Fragment>
      <nav className="relative w-full flex flex-wrap text-gray-500 py-10 pr-0 mx-32">
        <div className="flex items-center relative ml-auto">
          {user ? (
            <div className="flex cursor-pointer">
              <HiOutlineLogout onClick={logout} className="m-auto" />
              <span className="capitalize mr-8">Logout</span>
            </div>
          ) : null}
        </div>
      </nav>
    </React.Fragment>
  );
};
