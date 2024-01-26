"use client";

import { Tweet } from "react-tweet";
import { useState } from "react";
export function Tweets() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <h1>tweet theme</h1>
      <div>
        <button
          className="rounded-sm  bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground px-2"
          onClick={() => setTheme("light")}
        >
          Light Mode
        </button>
        <button
          className="rounded-sm  bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground px-2"
          onClick={() => setTheme("dark")}
        >
          Dark Mode
        </button>
      </div>
      <div
        data-theme={theme}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <Tweet id="1718296988729356404" />
        <Tweet id="1647193298908397571" />
        <Tweet id="1633770889119506432" />
        <Tweet id="1581469371322445825" />
      </div>
    </>
  );
}
