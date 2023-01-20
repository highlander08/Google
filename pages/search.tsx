import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
const Search: NextPage = ({ data }: any) => {
  const router = useRouter();
  console.log(data);

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />
      <SearchResults results={data} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context: any) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then(async (res) => await res.json());

  // const data = await res.json();
  // after the server renders, pass the data to the client/browser
  return {
    props: {
      data,
    },
  };
}
