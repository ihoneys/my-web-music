import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from "./store/actionCreators";

function IYRecommend(props) {
  console.log(props);
  const { topBanners } = useSelector((state) => {
    return { topBanners: state.get('recommend').get("topBanners") };
  }, shallowEqual);
  console.log(topBanners);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>推荐</div>;
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
