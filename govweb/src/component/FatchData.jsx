import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProfileActions } from "../store/ProfileSlice";

function FatchData() {
  const dispatch = useDispatch();
  useEffect(() => {
    const Controller = new AbortController();
    fetch("http://localhost:8082/profile1")
      .then((res) => res.json())
      .then(({ profile }) => dispatch(ProfileActions.AddProfile(profile)));

    return () => {
      Controller.abort();
    };
  }, []);
  return <></>;
}
export default FatchData;
