import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { Carousel } from "antd";

export default memo(function IYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector((state) => {
    return { topBanners: state.get("recommend").get("topBanners") };
  }, shallowEqual);
  // console.log(topBanners);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const banner = useRef();

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  const beforeChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    });
  }, []);
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={banner}
            beforeChange={beforeChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt="banners"
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => banner.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => banner.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
