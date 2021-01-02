/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/require-render-return */
import React from "react";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <TvPresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
