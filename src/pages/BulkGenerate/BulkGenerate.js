import React, { useState } from "react";
import Iconadd from "src/components/Iconadd";
import router from "../../api/UrlRouter";
import { ClipLoader, BeatLoader } from "react-spinners";
import IconTrash from "src/components/IconTrash";

export default function BulkGenerate() {
  const [loading, setLoading] = useState();
  const [partial, setPartial] = useState();
  const [tipe, setTipe] = useState();
  const [inputList, setInputList] = useState([
    {
      idfile: "",
      file: "",
      namadoc: "",
      nodoc: "",
      tgldoc: "",
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    if (index > -1) {
      list.splice(index, 1); // 2nd parameter means remove one item only
    }
    setInputList(list);
  };

  // handle add click
  const handleAddClick = () => {
    setInputList([...inputList, { idfile: "", file: "" }]);
  };
  
  // handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      tipe: tipe,
      partial: partial === "true",
      document: inputList,
    };
    const Gen = await router
      .BulkGenerate(data)
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false)
      });;
  }
  return (
    <section className="container p-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="w-full">
          <h1 className="text-2xl font-bold pb-4">Bulk Generate</h1>
          <div className="flex flex-col w-4/12">
            <h3>Tipe</h3>
            <input
              type="text"
              name="namadoc"
              onChange={(e) => setTipe(e.target.value)}
              className="rounded-md mb-4"
              placeholder="Masukkan tipe"
            />

            <span>Partial</span>
            <select
              onChange={(e) => setPartial(e.target.value)}
              name="partial"
              className="rounded-md mb-4"
            >
              <option value="">--Pilih--</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
          {inputList.map((val, i) => {
            return (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 border-b border-dashed"
                id="row"
              >
                <div>
                  <h3>ID File</h3>
                  <input
                    type="number"
                    name="idfile"
                    value={val.idfile}
                    onChange={(e) => handleInputChange(e, i)}
                    className="rounded-md mb-4"
                    placeholder="Masukkan id file"
                  />
                </div>
                <div>
                  <h3>File</h3>
                  <input
                    type="file"
                    name="file"
                    value={val.file}
                    onChange={(e) => handleInputChange(e, i)}
                    className="rounded-md mb-4"
                    placeholder="Masukkan nama identitas"
                  />
                </div>
                <div>
                  <h3>Nama Document</h3>
                  <input
                    type="text"
                    name="namadoc"
                    value={val.namadoc}
                    onChange={(e) => handleInputChange(e, i)}
                    className="rounded-md mb-4"
                    placeholder="Masukkan nama document"
                  />
                </div>
                <div>
                  <h3>Nomor Document</h3>
                  <input
                    type="number"
                    name="nodoc"
                    value={val.nodoc}
                    onChange={(e) => handleInputChange(e, i)}
                    className="rounded-md mb-4"
                    placeholder="Masukkan nomor document"
                  />
                </div>
                <div>
                  <h3>Tgl Document</h3>
                  <input
                    type="date"
                    name="tgldoc"
                    value={val.tgldoc}
                    onChange={(e) => handleInputChange(e, i)}
                    className="rounded-md mb-4"
                    placeholder=""
                  />
                </div>
                <div className="flex items-center mt-2">
                  {inputList.length !== 1 && (
                    <span
                      className="p-2 bg-red-600 rounded-full mr-2 cursor-pointer"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <IconTrash />
                    </span>
                  )}
                  {inputList.length - 1 === i && (
                    <span
                      onClick={() => handleAddClick()}
                      className="p-2 bg-blue-600 rounded-full cursor-pointer"
                    >
                      <Iconadd />
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          <hr />
          {loading == true ? (
            <button className="px-4 mt-4 py-2 bg-blue-600 rounded-lg text-white">
              Loading
              <BeatLoader size={5} color={"#fff"} />
              <ClipLoader size={15} color={"#fff"} />
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 mt-4 py-2 bg-blue-600 rounded-lg text-white"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
