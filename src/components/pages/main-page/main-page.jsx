import React from "react";
import Preview from "../../blocks/preview/preview";
import FeaturesList from "../../blocks/features-list/features-list";

export default function MainPage({ features }) {
  return (
    <>
      <Preview />
      <FeaturesList features={features} />
    </>
  );
}
