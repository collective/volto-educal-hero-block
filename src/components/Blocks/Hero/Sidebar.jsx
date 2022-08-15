import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import HeroSchema from '@plone-collective/volto-educal-hero-block/components/Blocks/Hero/schema';

const Sidebar = (props) => {
  const { data, block, onChangeBlock, selected } = props;
  const schema = HeroSchema();

  return (
    <SidebarPortal selected={selected}>
      <BlockDataForm
        schema={schema}
        title={schema.title}
        onChangeField={(id, value) => {
          onChangeBlock(block, {
            ...data,
            [id]: value,
          });
        }}
        formData={data}
        fieldIndex={data.index}
        block={block}
      />
    </SidebarPortal>
  );
};

export default Sidebar;
