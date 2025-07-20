import Header from "@/components/Layout/Header";

import TextEditor from "@/components/TextEditor";

export default function Doc() {
  return (
    <>
      <Header />
      <div className="w-3xl bg-blue-200 mx-auto p-5">
        <TextEditor />

      </div>
    </>
  );
}
