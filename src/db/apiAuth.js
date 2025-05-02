import supabase, { supabaseUrl } from "./supabase";

export default async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  }); // this is a custom supabase method src-> supabase docs->user management

  console.log("Login result:", data, error);

  if (error || !data.user) {
    throw new Error(error?.message || "Login failed: No user found");
  }

  return data; // data.user will contain id, email, user_metadata, created_at
  //data.session will contain access_token, refresh_token, expires_at
  // {
  //   "user": {
  //     "id": "12345",
  //     "email": "user@example.com",
  //     "user_metadata": { "name": "John Doe", "age": 30 },
  //     "created_at": "2021-01-01T12:00:00Z"
  //   },
  //   "session": {
  //     "access_token": "your_access_token_here",
  //     "refresh_token": "your_refresh_token_here",
  //     "expires_at": 1628510400
  //   }
  // }

  // so this function login returns our data i.e about user
}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession(); //includes the current session i.e about user,refresh token,access token etc
  if (!session.session) return null;
  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function signup({ name, email, password, profilepic }) {
  const fileName = `dp-${name.split(" ").join("-")}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("profilepic")
    .upload(fileName, profilepic);

  if (storageError) throw new Error(storageError.message);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        profilepic: `${supabaseUrl}/storage/v1/object/public/profilepic/${fileName}`,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}
