import React, {useState} from "react";
import Form from "../components/form";
import Result from "../components/result";

export default function Home() {
  const [dinoid, setdinoid] = useState(-1);
  const fetchid = (dinoid) => {
    setdinoid(dinoid);
    // console.log(dinoid);
  }
  return (
    <>
      <Form
        passnote={fetchid}
      />
      <Result
        dinoind={dinoid}
      />
    </>
  )
}
