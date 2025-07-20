import Layout from "@/components/Layout";
import { AiOutlineLink } from "react-icons/ai";

const Home = () => {
  const files = [
    { name: "file1", size: "20MB", last_modeified: "10-08-2025" },
    { name: "file2", size: "39MB", last_modeified: "10-08-2025" },
    { name: "file3", size: "19MB", last_modeified: "10-08-2025" },
    { name: "file4", size: "23MB", last_modeified: "10-08-2025" },
  ];

  return (
    <>
      <Layout>
          <div className="flex items-center justify-center gap-2">
            <button className="px-40 py-20 bg-gray-100 cursor-pointer text-xl">
              New File
            </button>
            <button className="px-40 py-20 bg-gray-100 cursor-pointer text-xl">
              Open File
            </button>
          </div>

          <div className="mt-6 " id="allFiles">
            <h2 className="text-xl font-bold">All Files : </h2>
            <div>
              <div className="flex items-center p-2 m-1 ">
                <span className="font-bold w-xs">Name</span>
                <span className="font-bold w-xs">Size</span>
                <span className="font-bold w-xs">Last Modeified Date</span>
                <span className="font-bold w-xs">Action</span>
              </div>
              {files.map((file) => (
                <div
                  className="flex items-center p-2 m-1 bg-blue-100"
                  key={file.name}
                >
                  <span className="w-xs">{file.name}</span>
                  <span className="w-xs">{file.size}</span>
                  <span className="w-xs">{file.last_modeified}</span>
                  <span className="w-xs"><AiOutlineLink className="cursor-pointer" /></span>
                </div>
              ))}
            </div>
          </div>
      </Layout>
    </>
  );
};

export default Home;
