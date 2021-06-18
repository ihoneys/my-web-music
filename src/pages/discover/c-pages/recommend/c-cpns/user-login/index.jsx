import React, { memo } from "react";

import IYThemeHeaderIcon from "@/components/theme-header-rcm";

import { RankingWrapper } from "./style";
export default memo(function IYRecommendRanking() {
  return (
    <RankingWrapper>
      <IYThemeHeaderIcon title="榜单" />
    </RankingWrapper>
  );
});
