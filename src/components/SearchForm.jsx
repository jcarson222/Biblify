import { useState, useRef } from "react";
import { useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({ sendValues }) => {
  // NAVIGATION
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // REFS
  const bookRef = useRef();
  const chapterRef = useRef();
  const verseRef = useRef();

  // HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookValue = bookRef.current.value;
    const chapterValue = chapterRef.current.value;
    const verseValue = verseRef.current.value;

    if (!bookValue || !chapterValue || !verseValue) {
      console.log("provide all form values");
      return;
    }

    sendValues({ book: bookValue, chapter: chapterValue, verse: verseValue });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="book" className="form-label">
          book
        </label>
        <input type="search" name="book" className="form-input" ref={bookRef} />

        <label htmlFor="chapter" className="form-label">
          chapter
        </label>
        <input
          type="search"
          name="chapter"
          className="form-input"
          ref={chapterRef}
        />

        <label htmlFor="verse" className="form-label">
          verse
        </label>
        <input
          type="search"
          name="verse"
          className="form-input"
          ref={verseRef}
        />

        <button className="btn btn-block" disabled={isSubmitting} type="submit">
          {isSubmitting ? "searching..." : "search"}
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchForm;
