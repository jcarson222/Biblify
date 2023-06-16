import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { findPassage } from "../requests/findPassage";
import SearchForm from "../components/SearchForm";

const FindPassage = () => {
  const [bookValue, setBookValue] = useState("John");
  const [chapterValue, setChapterValue] = useState("3");
  const [verseValue, setVerseValue] = useState("16");
  const [passageData, setPassageData] = useState(null);

  const search = `${bookValue}+${chapterValue}:${verseValue}`;
  console.log(search);

  const { data, isLoading, isError, refetch } = useQuery(["passage"], () =>
    findPassage(search)
  );

  useEffect(() => {
    refetch();
  }, [bookValue, chapterValue, verseValue, refetch]);

  useEffect(() => {
    if (data) {
      setPassageData(data.data);
    }
  }, [data]);
  console.log(passageData);

  const onFormSubmit = (values) => {
    const { book, chapter, verse } = values;
    setBookValue(book);
    setChapterValue(chapter);
    setVerseValue(verse);
    // console.log(book, chapter, verse);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>find a passage</h1>
      <SearchForm sendValues={onFormSubmit} />
      {isLoading ? <h1>Loading...</h1> : <p className="form">{passageData}</p>}
    </>
  );
};

export default FindPassage;
