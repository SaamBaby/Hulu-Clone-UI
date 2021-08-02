import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div className="px-5 my-16 sm:grid md:grid-cols-3 xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
