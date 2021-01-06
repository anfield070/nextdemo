import React from "react";
import useSWR from "swr";
import axios from "axios";

export default function Youtubes() {
  //   const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const url = "http://localhost:3000/api/delay/youtube";
  const { data, error, mutate } = useSWR(url, fetcher);

  return (
    <div>
      <h1>Clientside youtube mutate</h1>
      <h2>sdfsdf</h2>

      <button
        onClick={() => {
          //request to update server
          mutate({
            ...data,
            youtubes: [...data.youtubes, { titile: "xxxx", subtitle: "yyy" }],
          });
        }}
      >
        mutate
      </button>
      {/* <span>{JSON.stringify(data)}</span> */}

      <ul>
        {data &&
          data.youtubes.map((movie, index) => {
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
