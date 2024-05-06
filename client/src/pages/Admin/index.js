import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle"
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";
import TheatresList from "./TheatresList";
//  import TheatresList from "./TheatresList";
//  import UpcomingList from './UpcomingList'

function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="movies">
        <Tabs.TabPane tab="Movies" key="movies">
          <MoviesList></MoviesList>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="theatres">
          <TheatresList></TheatresList>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;