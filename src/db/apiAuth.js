import supabase from "./supabase";

export default async function login(_, { email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("Login result:", data, error);

  if (error || !data.user) {
    throw new Error(error?.message || "Login failed: No user found");
  }

  return data;
}
