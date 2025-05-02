import React, { useEffect, useState } from "react";
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
import BeatLoader from "react-spinners/BeatLoader"; // better way
import Error from "./Error";
import * as Yup from "yup";
import useFetch from "./hooks/Use-fetch";
import login from "../db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUrlState } from "../Context";
import { signup } from "../db/apiAuth";

const Signup = () => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilepic: null,
  });

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const { data, error, loading, fn: fnSignUp } = useFetch(signup);
  //form data is the input and data is the output that we are getting
  const { fetchUser } = useUrlState();

  useEffect(() => {
    if (error === null && data) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
      fetchUser();
    }
  }, [error, loading]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSignup = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must have at least 6 characters")
          .required("Password is required"),
        profilepic: Yup.mixed().required("Profile pic is required"),
      });
      await schema.validate(formData, { abortEarly: false });

      await fnSignUp(formData); // ✅ Pass formData here
    } catch (error) {
      const newErrors = {};
      error?.inner?.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>
            Create your account!! If you don't have one
          </CardDescription>
          {error && <Error message={error.message} />} {/* ✅ Correct */}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="name"
              type="name"
              placeholder="Enter Name"
              onChange={handleInputChange}
            />
            {errors.name && <Error message={errors.name} />}
          </div>

          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
            {errors.email && <Error message={errors.email} />}
          </div>

          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            {errors.password && <Error message={errors.password} />}
          </div>

          <div className="space-y-1">
            <Input
              name="profilepic"
              type="file"
              accept="image/*"
              onChange={handleInputChange}
            />
            {errors.profilepic && <Error message={errors.profilepic} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignup}>
            {loading ? (
              <BeatLoader size={10} color="#36d7b7" />
            ) : (
              "Create Account"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
