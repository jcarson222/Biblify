import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { findPassage } from "../requests/findPassage";
import SearchForm from "../components/SearchForm";

const FindPassage = () => {
  const search = "John+3:16";
  const { data } = useQuery(["passage"], () => findPassage(search));
  const [passageData, setPassageData] = useState(null);

  useEffect(() => {
    if (data) {
      setPassageData(data);
    }
  }, [data]);
  // console.log(passageData);

  const onFormSubmit = (values) => {
    const { book, chapter, verse } = values;
    console.log(book, chapter, verse);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>find a passage</h1>
      <SearchForm sendValues={onFormSubmit} />
      {/* <p>{passageData}</p> */}
    </>
  );
};

export default FindPassage;
