import React from "react";
import { useSelector } from 'react-redux';


export default function Title() {
  const user = useSelector(state => state.name);

  return <h1> Hello {user}!</h1>;
}
