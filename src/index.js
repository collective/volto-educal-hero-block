import {
  HeroEdit,
  HeroView,
} from '@plone-collective/volto-educal-hero-block/components/Blocks/Hero';

import iconSVG from '@plone/volto/icons/hero.svg';

const applyConfig = (config) => {
  config.blocks.blocksConfig.educalHero = {
    id: 'educalHero',
    title: 'Educal Hero',
    icon: iconSVG,
    group: 'common',
    view: HeroView,
    edit: HeroEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };
  // console.log(config);
  return config;
};

export default applyConfig;
