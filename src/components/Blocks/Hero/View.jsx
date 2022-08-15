import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

import '@plone-collective/volto-educal-hero-block/components/Blocks/Hero/hero.less';

import YellowShape from '@plone-collective/volto-educal-hero-block/../assets/yellow-bg.png';
import GreenDotsImage from '@plone-collective/volto-educal-hero-block/../assets/hero-1-dot.png';
import PinkShape from '@plone-collective/volto-educal-hero-block/../assets/hero-1-circle.png';
import PinkCircle from '@plone-collective/volto-educal-hero-block/../assets/hero-1-circle-3.png';
import BlueCircle from '@plone-collective/volto-educal-hero-block/../assets/hero-1-circle-4.png';

const View = ({ data, mode }) => {
  const {
    preheadingText,
    headingText,
    subHeadingText,
    showActionButton,
    actionButtonText,
    actionButtonUrl,
    foregroundImage,
    backgroundImage,
    quoteText1,
    quoteText2,
    enableShapes,
    margin,
  } = data;

  let headingFirstWord,
    headingRestWords,
    marginValue = '0px';

  if (headingText) {
    headingFirstWord = headingText.substring(0, headingText.indexOf(' '));
    headingRestWords = headingText.substring(headingText.indexOf(' ') + 1);
  }

  if (margin) {
    marginValue = margin;
  }

  const showShapes = mode !== 'edit' && enableShapes;

  const urlHandler = (url) =>
    isInternalURL(url) ? `${flattenToAppURL(url)}/@@images/image` : url;

  return (
    <div className="educalHeroRoot" style={{ margin: marginValue }}>
      {showShapes ? (
        <Image src={PinkShape} className="educalHeroRotatingShape" />
      ) : null}
      <div className="educalHeroContainer">
        <div className="educalHeroLeft">
          <div className="educalHeroTextHeading">{preheadingText}</div>
          <div className="educalHeroTextHeading educalHeroHeadingAlt">
            <span className="educalHeroYellowShapeWrapper">
              {headingFirstWord}
              {showShapes ? (
                <Image src={YellowShape} className="educalHeroYellowShape" />
              ) : null}
            </span>
            {headingRestWords ? ` ${headingRestWords}` : null}
          </div>
          <div className="educalHeroSubHeading">{subHeadingText}</div>
          {showActionButton ? (
            <Button
              primary
              className="educalHeroButton"
              content={actionButtonText}
              as="a"
              href={actionButtonUrl}
            />
          ) : null}
        </div>
        <div className="educalHeroRight">
          <div className="educalHeroImageWrapper">
            {showShapes ? (
              <Image src={GreenDotsImage} className="educalHeroGreenDots" />
            ) : null}
            <Image
              src={urlHandler(foregroundImage)}
              className="educalHeroImageMain"
            />
          </div>
          <div className="educalHeroImageAltWrapper">
            {showShapes ? (
              <Image src={BlueCircle} className="educalHeroBlueCircle" />
            ) : null}
            {showShapes ? (
              <Image src={PinkCircle} className="educalHeroPinkCircle" />
            ) : null}
            <Image
              src={urlHandler(backgroundImage)}
              className="educalHeroImageAlt"
            />
          </div>
          {quoteText1 || quoteText2 ? (
            <div className="educalHeroQuoteContainer">
              <div className="educalHeroQuoteText1">{quoteText1}</div>
              <div className="educalHeroQuoteText2">{quoteText2}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default View;
