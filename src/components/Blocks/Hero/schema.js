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
    },
    headingText: {
      title: 'Heading',
      type: 'string',
    },
    subHeadingText: {
      title: 'Sub-Heading',
      type: 'string',
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
      widget: 'attachedimage',
    },
    backgroundImage: {
      title: 'Background Image',
      widget: 'attachedimage',
    },
    quoteText1: {
      title: 'Quote Message Top',
      type: 'string',
    },
    quoteText2: {
      title: 'Quote Message Bottom',
      type: 'string',
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
