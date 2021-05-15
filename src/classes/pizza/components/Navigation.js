import React from "react";
import { useSelector } from 'react-redux';


export default function Navigation() {

  const user = useSelector(state => state.name)

  return (
    <nav>
      <div className="nav-title">Pizza Calculator!</div>
      <div className="nav-user">{user}</div>
    </nav>
  );
}
