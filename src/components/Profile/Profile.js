import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        {" "}
        Profile
        <br />
        <br />
        <img src={avatar} alt={tag} className={styles.avatar} />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  name: "Vasia",
  tag: "Pupkin",
  location: "no location",
  avatar:
    "https://media.istockphoto.com/photos/funny-donkey-picture-id140473572?b=1&k=20&m=140473572&s=170667a&w=0&h=aXk-RHNWpGsyr6ETA0QFg8OkHOuqqSv_7eHlRKPhK8k=",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
