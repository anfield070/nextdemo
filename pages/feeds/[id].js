import React from "react";
import { useRouter } from "next/router";

export default function feed({ movies, nameparams }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{nameparams} </h1>
      {/* <span>{JSON.stringify(movies)}</span> */}
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={`$index`}>
              <img
                src={movie.youtube_image}
                height={40}
                style={{ marginRight: 16 }}
              />
              {`${index + 1}. ${movie.title} : ${movie.subtitle} `}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "foods" } },
      { params: { id: "songs" } },
      { params: { id: "superhero" } },
    ],
    fallback: false,
    // fallback: true,
  };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
      nameparams: params.id,
    },
  };
}
