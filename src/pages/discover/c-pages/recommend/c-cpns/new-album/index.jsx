import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import IYThemeHeaderIcon from "@/components/theme-header-rcm";

import { RankingWrapper } from "./style";
export default memo(function IYNewAlbum() {
  const [albums, setAlbums] = useState([]);

  const dispatch = useDispatch();

  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.get("recommend").get("newAlbums"),
  }));
  console.log(newAlbums);

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <IYThemeHeaderIcon title="新碟上架" />
    </RankingWrapper>
  );
});
