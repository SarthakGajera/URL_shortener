import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import BeatLoader from "./../../node_modules/react-spinners/esm/BeatLoader";
import Error from "./Error";
import { useState } from "react";

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    setErrors([]);
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your account</CardDescription>
          <Error message={"Something went wrong"} />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
            <Error message={"Something went wrong"} />
          </div>

          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>
            {true ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
