import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/">
        <img
          src="../../Logo.png"
          alt="MinifyMe"
          className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain "
        />
      </Link>

      <div>
        <Button onClick={() => navigate("/auth")}>Login</Button>
      </div>
    </nav>
  );
};

export default Header;
