# volto-educal-hero-block

A [volto](https://plone.org/what-is-plone/volto) [block](https://6.dev-docs.plone.org/volto/blocks/index.html) [add-on](https://6.dev-docs.plone.org/volto/addons/index.html) for a hero block. It contains heading on left side and can have two images on the right side.

## Customizable properties

<details>
  <summary>Click to expand!</summary>

1. `preheadingText` (_string_): The text before the heading.
1. `headingText` (_string_): The heading text.
1. `subHeadingText` (_string_): The sub-heading text.
1. `showActionButton` (_boolean_): Toggle the `CTA-Button`.
1. `actionButtonText` (_string_): `CTA-Button` label.
1. `actionButtonUrl` (_string_): `CTA-Button` _URL_ which is navigated onClick.
1. `foregroundImage` (_image_): Foreground image url.
1. `backgroundImage` (_image_): Background image url.
1. `quoteText1` (_string_): The quote text for the first line.
1. `quoteText2` (_string_): The quote text for the second line.
1. `enableShapes` (_boolean_): Toggle the various background shapes along with the animations.
1. `margin` (_string_): Specifies the `margin` css property of the banner.

</details>

## Example

### Configuration

```txt
preheadingText: 'Access 2700+'
headingText: 'Online Tutorial From Top Instructor.'
subHeadingText: 'Meet university,and cultural institutions, who'll share their experience.'
showActionButton: true
actionButtonText: 'View all courses'
actionButtonUrl: '/'
foregroundImage: '/hero.jpg'
foregroundImage: '/hero2.jpg'
quoteText1: 'Tomorrow is our'
quoteText2: '“When I Grow Up” Spirit Day!'
enableShapes: true
margin: '75px -50px 200px -50px'
```

### Output

![image](/assets/github/preview.png)
