import { Tweet } from "react-tweet";
import { ThemeChanger } from "@/components/theme-toggle";

// import { Tweets } from "@/components/tweet";

export default function Home() {
  return (
    <main className="flex min-h-screen-xl flex-col items-center justify-between p-14">
      <ThemeChanger />

      {/* <Tweets /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Tweet id="1718296988729356404" />
        <Tweet id="1647193298908397571" />
        <Tweet id="1633770889119506432" />
        <Tweet id="1581469371322445825" />
      </div>
    </main>
  );
}
