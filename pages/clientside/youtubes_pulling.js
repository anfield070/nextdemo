import React from "react";
import useSWR from "swr";
import axios from "axios";

export default function Youtubes() {
  //   const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const url = "/api/random";
  const option = {
    refreshInterval: 1000,
  };
  const { data, error } = useSWR(url, fetcher, option);

  return (
    <div>
      <h1>client-side SWR Interval Pulling</h1>
      <span>{data && data.random}</span>
    </div>
  );
}
