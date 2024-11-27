import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./home.css";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import { useSelector } from "react-redux";
import vid from "../../components/Video/vid.mp4";

function Home() {
  // const vids = useSelector((state) => state.videos);

  const vids = [
    {
      id: "1",
      title: "Sample Video1",
      url: vid,
      uploader: "fayeja",
      views: 1200,
      likes: 300,
      comments: [
        { user: "Jane", text: "Great video!", timestamp: "2024-11-27" },
      ],
    },
  ];

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Comedy",
    "Gaming",
    "Music",
    "Video",
    "Sports",
  ];
  return (
    <div className="container_pages">
      <LeftSidebar />
      <div className="container_pages2">
        <div className="navigation_Home">
          {NavList.map((m) => (
            <div className="btn_home_nav" key={m}>
              {m}
            </div>
          ))}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
}

export default Home;
