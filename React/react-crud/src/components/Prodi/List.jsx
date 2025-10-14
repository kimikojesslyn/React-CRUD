import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { data } from "react-router-dom";

export default function List() {
  const [prodi, setProdi] = useState([]);

  useEffect(() => {
    axios.get("https://project-apiif-3-b.vercel.app/api/api/prodi").then((response) => {
      console.log(response.data);
      setProdi(response.data.result);
    });
  }, []);
  return (
    <div>
      <h2>List Prodi</h2>
      <NavLink to="/prodi/create" className="btn btn-primary mb-3">
        Create
      </NavLink>
      <ul>
        {prodi.map((data) => (
          <li>{data.nama}</li>
        ))}
      </ul>
    </div>
  );
}
