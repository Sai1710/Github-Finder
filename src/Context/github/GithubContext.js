import React from "react";
import { createContext, useReducer } from "react";
import { useState } from "react";
import githubReducer from "./GithubContextReducer";
import axios from "axios";
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    repos: [],
    user: {},
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    axios
      .get(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token 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`,
        },
      })
      .then(async (res) => {
        // const { items } = await res.json();

        // console.log(items);
        dispatch({
          type: "GET_USERS",
          payload: res.data.items,
        });
      });
  };

  const getUser = async (login) => {
    setLoading();
    axios
      .get(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token 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`,
        },
      })
      .then(async (res) => {
        if (res.status == 404) {
          window.location = "/notfound";
        } else {
          // const data = await res.json();

          // console.log(data);
          dispatch({
            type: "GET_USER",
            payload: res.data,
          });
        }
      });
  };
  const getRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    axios
      .get(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
          Authorization: `token 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`,
        },
      })
      .then(async (res) => {
        // console.log(data);
        dispatch({
          type: "GET_REPOS",
          payload: res.data,
        });
      });
  };
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        repos: state.repos,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
