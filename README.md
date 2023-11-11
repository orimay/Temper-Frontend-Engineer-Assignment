# Temper Frontend Engineer Assignment

This project is a solution to the Temper Frontend Engineer Assignment. It is a
Vue.js application that implements a sortable post list with additional features
as outlined in the assignment.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Accessibility](#accessibility)
- [Animations](#animations)
- [Acknowledgements](#acknowledgements)

## Features

- Display the first 5 posts from
  [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
- Sort posts by clicking up/down arrows.
- Track and display actions committed on the right side component.
- Implement "Time Travel" functionality to revert posts to a previous state.

## Technology Stack

- Vue.js (Version 3.3.4)
- Tailwind CSS (Version 3.3.5)
- TypeScript (Version 5.0.2)
- Pinia (Version 2.1.7)
- Iconify (Version 4.1.1)
- Vite (Version 4.4.5)

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Usage

- Visit the application in your browser.
- Interact with the left side component to manipulate the order of posts.
- View the actions committed on the right side component.
- Use the "Time Travel" button to revert to a previous state.

## Testing

- Unit tests: Run `npm run test:unit` using Vitest (Version 0.34.6).
- End-to-end tests: Run `npm run test:e2e` using Cypress (Version 13.5.0).

## Accessibility

This project is designed with accessibility in mind to ensure a positive user
experience for everyone. Key accessibility features include:

- **Screen Reader Compatibility**: The application is designed to be compatible
  with screen readers, making it accessible to users with visual impairments.
- **Keyboard Navigation**: Users can navigate through the application using the
  keyboard, enhancing accessibility for those who rely on keyboard input.
- **Focus Highlighting**: The focused elements within the application are
  highlighted, providing a clear visual indication of the currently selected
  element.
- **Responsive Design**: The layout adapts to different screen sizes, ensuring
  accessibility on both mobile and desktop environments.

## Animations

This project incorporates animations to enhance the user experience. Key
animation features include:

- **Element Swapping**: When elements are rearranged, a smooth animation is
  applied to visually transition between their positions.

- **Entry Animation**: Each newly appearing element animates its height from 0
  and fades in, providing a visually appealing transition effect.

- **Exit Animation**: Elements leaving the view fade out and animate their
  height to 0, creating a graceful exit effect.

These animations are applied to various elements within the application,
including time travel entries and up/down buttons.

## Acknowledgements

This project was created as part of the Temper Frontend Engineer Assignment.
Special thanks to the team at Temper for the opportunity.

Feel free to reach out if you have any questions or need further assistance.
