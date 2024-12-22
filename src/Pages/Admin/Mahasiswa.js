import React, { useState } from "react";
import Table from "../../Components/Table";
import ModalTambah from "../../Components/ModalTambah";

function Mahasiswa() {
  const [tambahModal, settambahModal] = useState(false);
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    const newStudentWithId = { ...newStudent, id: students.length + 1 };
    setStudents([...students, newStudentWithId]);
  };

  return (
    <div className="flex flex-1 flex-col">
      <header className="bg-white p-4">
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </header>

      <div className="flex p-4 mb-1 justify-between bg-blue-50">
        <h2 className="text-xl font-semibold">List Mahasiswa</h2>
        <button
          onClick={() => settambahModal(true)}
          className="bg-green-500 rounded px-4 py-2 text-white font-semibold"
        >
          Tambah
        </button>
      </div>

      {tambahModal && (
        <ModalTambah
          onClose={() => settambahModal(false)}
          onAddStudent={handleAddStudent}
        />
      )}

      <Table students={students} setStudents={setStudents} />
    </div>
  );
}

export default Mahasiswa;
