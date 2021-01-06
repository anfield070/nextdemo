import React from "react";
import useSWR from "swr";
import axios from "axios";

export default function Youtubes() {
  //   const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const url =
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods";
  const { data, error } = useSWR(url, fetcher);

  return (
    <div>
      <h1>Clientside youtube</h1>
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
