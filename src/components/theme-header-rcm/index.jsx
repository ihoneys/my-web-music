import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const IYThemeHeaderIcon = function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="www.baidu.com">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="www.baidu.com">更多</a>
        <i className="icon"></i>
      </div>
    </HeaderWrapper>
  );
};

IYThemeHeaderIcon.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

IYThemeHeaderIcon.defaultProps = {
  keywords: [],
};

export default memo(IYThemeHeaderIcon);
