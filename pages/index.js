import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/Requests";

// this will get rendered on the client
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}
//   react js works is use deploy the entire app to the server so when the user goes to the website teh entire
// javascrip loades in the server
// IN case fo  next js we get to a website we render is server side so we build  the entire
// website on server all teh javascrip executed before the user goes to that page and send everything as a prop
//  teh entire data the user has to enter them selves to the page

// function to do the above that mean only is is sever side rendered

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
