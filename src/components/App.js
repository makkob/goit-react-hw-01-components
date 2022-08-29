import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import "./index.css";
import user from "../data/user.json";
import statistical from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transaction from "../data/transactions.json";

export default function App() {
  let { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <div>
        {" "}
        <Statistics title="Statistics" stats={statistical} />
        <Statistics stats={statistical} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  );
}
