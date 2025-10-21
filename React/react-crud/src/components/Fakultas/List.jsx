import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

export default function List() {
  // State fakultas untuk menyimpan data response API Fakultas
  const [fakultas, setFakultas] = useState([]);
  const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan jika dikonfirmasi
        axios
          .delete(`https://project-apiif-3-b.vercel.app/api/api/fakultas/${id}`)
          .then((response) => {
            //Hapus fakultas dari state setelah sukses dihapus dari server
            setFakultas(fakultas.filter((data) => data.id !== id));
            //Tampilkan notifikasi sukses
            Swal.fire({
              title: "Deleted!",
              text: "Your data has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting data:", error); // Menangani error
            Swal.fire("Error", "There was an issue deleting the data.", "error");
          });
      }
    });
  };
  // Panggil API Fakultas menggunakan useEffect dan axios
  useEffect(() => {
    axios.get("https://project-apiif-3-b.vercel.app/api/api/fakultas").then((response) => {
      console.log(response.data);
      setFakultas(response.data.result);
    });
  }, []);

  return (
    <div>
      <h2>List Fakultas</h2>
      <NavLink to="/fakultas/create" className="btn btn-primary mb-3">
        Create
      </NavLink>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nama Fakultas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {fakultas.map((data) => (
            <tr key={data.id}>
              <td>{data.nama}</td>
              <td>
                <button onClick={() => handleDelete(data.id, data.nama)} className="btn btn-danger btn-sm me-2">
                  Hapus
                </button>
                <NavLink to={`/fakultas/edit/${data.id}`} className="btn btn-warning btn-sm">
                  Ubah
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
