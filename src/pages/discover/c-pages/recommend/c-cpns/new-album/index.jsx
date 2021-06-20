import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";

import { getNewAlbumsAction } from "../../store/actionCreators";

import IYThemeHeaderIcon from "@/components/theme-header-rcm";
import IYAlbumCover from "@/components/album-cover";

import { AlbumWrapper } from "./style";

export default memo(function IYNewAlbum() {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const pageRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <IYThemeHeaderIcon title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return <IYAlbumCover key={iten.id} info={iten} size={110} width={118} bgp="-570px"/>;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>

        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
});
