import React, {useState} from "react";
import Form from "../components/form";
import Result from "../components/result";
import Landing from "../components/Landing";
import About from "../components/About";
import Knowmore from "../components/Knowmore";
import Footer from "../components/Footer";

export default function Home() {
  const [dinoid, setdinoid] = useState(-1);
  const fetchid = (dinoid) => {
    setdinoid(dinoid);
    // console.log(dinoid);
  }
  return (
    <>
      <Landing/>
      <About/>
      <Form
        passnote={fetchid}
      />
      <Result
        dinoind={dinoid}
      />
      <Knowmore/>
      <Footer/>
    </>
  )
}
