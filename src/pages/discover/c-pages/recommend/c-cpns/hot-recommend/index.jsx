import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HotRecommendWrapper } from "./style";

import { getHotRecommendsAction } from "../../store/actionCreators";

import IYThemeHeaderIcon from "@/components/theme-header-rcm";
import IYSongsCover from "@/components/songs-cover";

export default memo(function IYHotRecommend() {
  const { hotRecommends } = useSelector((state) => {
    return {
      hotRecommends: state.get("recommend").get("hotRecommends"),
    };
  }, shallowEqual);
  console.log(hotRecommends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendsAction());
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <IYThemeHeaderIcon title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <IYSongsCover info={item} key={item.id} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
