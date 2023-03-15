---
title: "Modern CSS Features That Appeared in 2022"
subtitle: "Article about Modern CSS Features That Appeared in 2022"
date: "2023-03-23"
---


Say hello to these new features!

CSS is a constantly evolving language, and 2022 saw the introduction of several new features that have the potential to improve the way we build and style web pages greatly.

In this article, we’ll take a look at some of the most exciting CSS features that were introduced in 2022, including the new :has pseudoclass, the @apply rule, and the color-adjust property. These modern CSS features allow for more concise and flexible stylesheets and make creating dynamic and responsive designs easier. We’ll explore how to use these features and how they can help you build better websites.

## Pseudoclass :has
The :has pseudoclass is a proposed CSS feature that would allow you to style elements based on whether they have a certain descendant. It is not yet supported by any browser.

Here is an example of how :has might be used:

```
/* Style all list items that have a child list */
li:has(ul) {
  font-weight: bold;
}
```

In this example, all li elements that have a child ul element would be styled with a bold font.

It’s worth noting that the :has pseudoclass is still in the proposal stage and is not yet supported by any browsers, so it is not yet possible to use it in web development.

## CSS Directive "@apply"
The @apply rule is a CSS feature that allows you to reuse a set of styles defined in a class by applying those styles to another element or class. It can be used to avoid repeating styles in your stylesheet, making it more concise and easier to maintain.

Here is an example of how @apply might be used:

```
/* Define a class with a set of styles */
.button-styles {
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: blue;
  border-radius: 4px;
}

/* Use the @apply rule to apply the styles to a button element */
button {
  @apply .button-styles;
}

/* Use the @apply rule to apply the styles to a class */
.warning-button {
  @apply .button-styles;
  background-color: orange;
}
```

In this example, the button-styles class defines a set of styles that can be applied to both button elements and to elements with the warning-button class. The @apply rule allows these styles to be reused without repeating them in the stylesheet.

It’s worth noting that the @apply rule is still in the proposal stage and is not yet supported by any browsers, so it is not yet possible to use it in web development.

## color-adjust Property
The color-adjust property is a CSS feature that allows you to specify how the colors of an element should be adjusted to account for the element's background color. This can be useful for ensuring that text is legible when displayed over a background image or color.

Here is an example of how color-adjust might be used:

```
/* Adjust the color of an element to be legible over a light background */
.light-bg {
  background-color: white;
  color-adjust: economy;
}

/* Adjust the color of an element to be legible over a dark background */
.dark-bg {
  background-color: black;
  color-adjust: exact;
}
```

In this example, the color-adjust property is used to ensure that the text is legible when displayed over a light or dark background. The value of economy tells the browser to adjust the colors of the text in a way that minimizes the number of color changes needed, while the value of exact tells the browser to adjust the colors as exactly as possible to ensure maximum legibility.

It’s worth noting that the color-adjust property is still in the proposal stage and is not yet supported by any browsers, so it is not yet possible to use it in web development.

## "@container" Rule
The @container rule is a CSS feature that allows you to define styles for a container element that will be applied to its children. This can be useful for creating consistent styles across a group of elements or for creating responsive layouts that adjust to the size of the container.

Here is an example of how @container might be used:

```
/* Define styles for a container element */
@container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* Apply the container styles to its children */
.container > * {
  @apply(--container);
}
```

In this example, the @container rule defines a set of styles that will be applied to all elements that are children of a container element with the class .container. The display: flex property specifies that the container element should use a flex layout, and the other properties specify how the children should be aligned within the container.

It’s worth noting that the @container rule is still in the proposal stage and is not yet supported by any browsers, so it is not yet possible to use it in web development.

## Conclusion
In summary, 2022 was a great year for CSS. Several features were introduced that have the potential to improve the way we build and style web pages greatly. The :has pseudoclass and the @apply rule allow for more concise and flexible stylesheets, while the color-adjust property makes it easier to create legible designs.

The @container rule makes it easier to create consistent and responsive layouts. While all browsers do not yet support these features, it is exciting to see the direction that CSS is heading and the potential for even more powerful and flexible styling. We can’t wait to see the future for CSS and web development.