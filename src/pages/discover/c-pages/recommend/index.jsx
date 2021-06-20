import React, { memo } from "react";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content,
} from "./style";

import IYTopBanner from "./c-cpns/top-banner";
import IYHotRecommend from "./c-cpns/hot-recommend";
import IYRecommendRanking from "./c-cpns/recommend-ranking";
import IYNewAlbum from "./c-cpns/new-album";

function IYRecommend(props) {
  // console.log(props);
  return (
    <RecommendWrapper>
      <IYTopBanner />
      <Content>
        <RecommendLeft>
          <IYHotRecommend />
          <IYNewAlbum />
          <IYRecommendRanking />          
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(IYRecommend);

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(IYRecommend));
