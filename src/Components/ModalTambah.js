import React, { useState } from "react";
import Button from "./Button";

function ModalTambah({ onClose, onAddStudent }) {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { nim, nama };
    onAddStudent(newStudent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-screen md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Tambah Mahasiswa</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="Nama" className="block text-gray-700">
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
            <Button onClick={onClose} colorClass="bg-gray-500" text="Batal" />
            <Button type="submit" colorClass="bg-green-500" text="Simpan" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalTambah;
