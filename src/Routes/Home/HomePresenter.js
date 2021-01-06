import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {};

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
