import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

function Table({ students, setStudents }) {
  const [editModal, setEditModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setEditModal(true);
  };

  const handleUpdateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setEditModal(false);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin Nih?",
      text: "Tidak Dapat Dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oke Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
        Swal.fire("Terhapus", "Data sudah dihapus", "success");
      }
    });
  };

  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-grow-1 p-4 bg-blue-50">
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="font-bold">
                {/* <td className="border px-4 py-2">No.</td> */}
                <td className="border px-4 py-2 text-center">NIM</td>
                <td className="border px-4 py-2 text-center">Nama Lengkap</td>
                <td className="border px-4 py-2 text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {students.map((mhs, index) => (
                <Mhs
                  key={mhs.id}
                  id={index + 1}
                  nama={mhs.nama}
                  nim={mhs.nim}
                  onEdit={() => handleEdit(mhs)}
                  onDelete={() => handleDelete(mhs.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {editModal && currentStudent && (
        <ModalEdit
          student={currentStudent}
          onClose={() => setEditModal(false)}
          onUpdate={handleUpdateStudent}
        />
      )}
    </div>
  );
}

function Mhs({ id, nama, nim, onEdit, onDelete }) {
  return (
    <tr className="bg-gray-100">
      {/* <td className="border px-4 py-2 break-all">{id}</td> */}
      <td className="border px-4 py-2 break-all">{nim}</td>
      <td className="border px-4 py-2 break-all">{nama}</td>
      <td className="border px-4 py-2 flex   flex-col md:flex-row gap-2 break-all">
        <button
          onClick={onEdit}
          className="flex items-center justify-center p-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded"
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          onClick={onDelete}
          className="flex items-center justify-center p-2 bg-red-500 hover:bg-red-400 text-white rounded"
          title="Hapus"
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

function ModalEdit({ student, onClose, onUpdate }) {
  const [nim, setNim] = useState(student.nim);
  const [nama, setNama] = useState(student.nama);

  const handleSubmit = () => {
    const updatedStudent = { ...student, nim, nama };
    onUpdate(updatedStudent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-screen md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit</h2>

        <div>
          <div className="mb-4">
            <label htmlFor="NIM" className="block text-gray-700">
              NIM
            </label>
            <input
              type="text"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <label htmlFor="name" className="block text-gray-700">
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 bg-gray-500 hover:bg-gray-400 text-white rounded"
            >
              Batal
            </button>
            <button
              onClick={handleSubmit}
              className="p-2 bg-green-500 hover:bg-green-400 text-white rounded ml-2"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
