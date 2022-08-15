import React from 'react';
import View from '@plone-collective/volto-educal-hero-block/components/Blocks/Hero/View';
import Sidebar from '@plone-collective/volto-educal-hero-block/components/Blocks/Hero/Sidebar';

const Edit = (props) => {
  return (
    <>
      <View {...props} mode="edit" />
      <Sidebar {...props} />
    </>
  );
};

export default Edit;
