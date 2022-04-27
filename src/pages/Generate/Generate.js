import React, { useState } from "react";
import router from "../../api/UrlRouter";

export default function Generate() {
  const [namadoc, setNamadoc] = useState();
  const [namaidentitas, setNamaidentitas] = useState();
  const [noidentitas, setNomoridentitas] = useState();
  const [namedipungut, setNamadipungut] = useState();
  const [file, setFile] = useState();
  const [nilaidoc, setNilaidokumen] = useState();
  const [nomordokumen, setNomordokumen] = useState();
  const [tgldoc, setTgldoc] = useState();
  const [isupload, setIsupload] = useState();
  const [snonly, setSnonly] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      isUpload: isupload === "true",
      namadoc: namadoc,
      namejidentitas: namaidentitas,
      noidentitas: noidentitas,
      namedipungut: namedipungut,
      namafile: file,
      nilaidoc: nilaidoc,
      snOnly: snonly === "true",
      nodoc: nomordokumen,
      tgldoc: tgldoc,
    };
    const Gen = await router.Generate(data).then((response) => {
      console.log(response);
    });
  }

  return (
    <section className="container p-4">
      <div className="w-4/12">
        <h1 className="text-2xl font-bold pb-4">Generate Materai</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col">
            <span>Nama Doc</span>
            <input
              onChange={(e) => setNamadoc(e.target.value)}
              type="text"
              name="namadoc"
              className="rounded-md mb-4"
              placeholder="Masukkan nama doc"
            />

            <span>Nama identitas</span>
            <input
              onChange={(e) => setNamaidentitas(e.target.value)}
              type="text"
              name="namejidentitas"
              className="rounded-md mb-4"
              placeholder="Masukkan nama identitas"
            />

            <span>Nomor identitas</span>
            <input
              onChange={(e) => setNomoridentitas(e.target.value)}
              type="number"
              name="noidentitas"
              className="rounded-md mb-4"
              placeholder="Masukkan nomor identitas"
            />

            <span>Nama dipungut</span>
            <input
              onChange={(e) => setNamadipungut(e.target.value)}
              type="text"
              name="namedipungut"
              className="rounded-md mb-4"
              placeholder="Masukkan nama dipungut"
            />

            <span>File</span>
            <input
              onChange={(e) => setFile(e.target.value)}
              type="file"
              name="file"
              className="rounded-md mb-2"
            />

            <span>Nilai dokumen</span>
            <input
              onChange={(e) => setNilaidokumen(e.target.value)}
              type="number"
              name="nilaidoc"
              className="rounded-md mb-4"
              placeholder="Masukkan nama identitas"
            />

            <span>Nomor dokumen</span>
            <input
              onChange={(e) => setNomordokumen(e.target.value)}
              type="number"
              name="nodoc"
              className="rounded-md mb-4"
              placeholder="Masukkan nama identitas"
            />
            <span>Tanggal dokumen</span>
            <input
              onChange={(e) => setTgldoc(e.target.value)}
              type="date"
              name="tgldoc"
              className="rounded-md mb-4"
              placeholder="Masukkan nama identitas"
            />

            <span>Is Upload</span>
            <select
              onChange={(e) => setIsupload(e.target.value)}
              name="isUpload"
              className="rounded-md mb-4"
            >
              <option value="">--Pilih--</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>

            <span>SN Only</span>
            <select
              onChange={(e) => setSnonly(e.target.value)}
              name="snOnly"
              className="rounded-md mb-4"
            >
              <option value="">--Pilih--</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          <hr />
          <button
            type="submit"
            className="px-4 mt-4 py-2 bg-blue-600 rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
