import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {" | "}
        <Link href="/services">
          <a>Services</a>
        </Link>
        {" | "}
        <Link href="/aboutus">
          <a>Aboutus</a>
        </Link>
        {" | "}
        <Link href="/movies">
          <a>Movies</a>
        </Link>
      </nav>
    </>
  );
}
