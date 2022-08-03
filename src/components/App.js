import React from "react";
import user from "../data/user.json";
import Profile from "./Profile";
import "./index.css";

export default function App() {
  let { name, tag, location, avatar, stats } = user;
  return (
    <Profile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
  );
}
