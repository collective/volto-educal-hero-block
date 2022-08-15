export default () => ({
  title: 'Educal Hero',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'preHeadingText',
        'headingText',
        'subHeadingText',
        'showActionButton',
        'actionButtonText',
        'actionButtonUrl',
        'foregroundImage',
        'backgroundImage',
        'quoteText1',
        'quoteText2',
        'enableShapes',
        'margin',
      ],
    },
  ],
  properties: {
    preHeadingText: {
      title: 'Pre-Heading',
      type: 'string',
      defaultValue: 'Put something attractive here!',
    },
    headingText: {
      title: 'Heading',
      type: 'string',
      defaultValue: 'Put your heading here!',
    },
    subHeadingText: {
      title: 'Sub-Heading',
      type: 'string',
      defaultValue: 'Put your sub-heading here!',
    },
    showActionButton: {
      title: 'Enable button',
      type: 'boolean',
    },
    actionButtonText: {
      title: 'Button text',
      type: 'string',
    },
    actionButtonUrl: {
      title: 'Button redirect url',
      type: 'string',
    },
    foregroundImage: {
      title: 'Foreground Image',
      widget: 'url',
    },
    backgroundImage: {
      title: 'Background Image',
      widget: 'url',
    },
    quoteText1: {
      title: 'Quote Message Top',
      type: 'string',
      defaultValue: 'Put your message here!',
    },
    quoteText2: {
      title: 'Quote Message Bottom',
      type: 'string',
      defaultValue: 'Put your message here!',
    },
    enableShapes: {
      title: 'Enable Shapes',
      type: 'boolean',
    },
    margin: {
      title: 'Margin',
      type: 'string',
    },
  },
  required: [],
});
