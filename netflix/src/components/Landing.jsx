import React from "react";
// import AnnouncementHeader from "../components/AnnouncementHeader";
// import NavigateBar from "../components/NavigateBar";
// import EnjoyTV from "../components/EnjoyTV";
// import CreateChildrenProfile from "../components/CreateChildrenProfile";
// import DownloadShows from "../components/DownloadShows";
// import FAQ from "../components/FAQ";
import MovieList from "./MovieList";

function Landing() {
  return (
    <React.Fragment>
      {/* <AnnouncementHeader />
      <NavigateBar />
      <EnjoyTV />
      <DownloadShows />
      <CreateChildrenProfile />
      <FAQ /> */}
      <MovieList />
    </React.Fragment>
  );
}

export default Landing;
