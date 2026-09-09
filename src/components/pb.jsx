import React, { useState, useEffect } from "react";

function PB() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/hari-785705")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{user.login}</h1>
      <img
        src={user.avatar_url}
        alt="avatar"
        width="120"
      />
      <p>{user.name}</p>
      <a
        href="https://github.com/hari-785705"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Profile
      </a>
    </div>
  );
}

export default PB;