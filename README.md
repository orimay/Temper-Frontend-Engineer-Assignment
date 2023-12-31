# Temper Frontend Engineer Assignment

This project is a solution to the Temper Frontend Engineer Assignment. It is a Vue.js application that implements a sortable post list with additional features as outlined in the assignment.

![Website](/images/website.png)

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Accessibility](#accessibility)
- [Animations](#animations)
- [Known Issues](#known-issues)
- [Acknowledgements](#acknowledgements)

## Features

- Display the first 5 posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).
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

- Unit tests: Run `npm run test:unit` using Vitest (Version 0.34.6). These tests comprehensively cover all functionality in the application.

- End-to-end tests: Run `npm run test:e2e` using Cypress (Version 13.5.0). Note that Cypress E2E tests are added for demonstration purposes and cover all functionality. However, it's important to highlight that while Cypress component tests are possible, they are not currently included in this project.

## Accessibility

This project is designed with accessibility in mind to ensure a positive user experience for everyone. Key accessibility features include:

- **Screen Reader Compatibility**: The application is designed to be compatible with screen readers, making it accessible to users with visual impairments.

- **Keyboard Navigation**: Users can navigate through the application using the keyboard, enhancing accessibility for those who rely on keyboard input.

- **Focus Highlighting**: The focused elements within the application are highlighted, providing a clear visual indication of the currently selected element.

- **Responsive Design**: The layout adapts to different screen sizes, ensuring accessibility on both mobile and desktop environments.

![Lighthouse](/images/lighthouse.png)

The current accessibility score is 94, due to a low contrast ratio between some background and foreground colors. It's important to note that these colors are design-specific. Adjusting them for better accessibility might impact the overall visual aesthetics.

## Animations

This project incorporates animations to enhance the user experience. Key animation features include:

- **Element Swapping**: When elements are rearranged, a smooth animation is applied to visually transition between their positions.

- **Entry Animation**: Each newly appearing element animates its height from 0 and fades in, providing a visually appealing transition effect.

- **Exit Animation**: Elements leaving the view fade out and animate their height to 0, creating a graceful exit effect.

These animations are applied to various elements within the application, including time travel entries and up/down buttons.

## Known Issues

- **Focus Loss on Up Button Trigger**: When navigating via keyboard and triggering the up button, the focus is lost after elements are reordered. This behavior is a [known Vue issue](https://github.com/vuejs/vue/issues/6929).

If you encounter any other issues or have suggestions for improvement, please feel free to reach out.

## Acknowledgements

- Diagonal Background: The diagonal background was created with inspiration from [this video](https://www.youtube.com/watch?v=uPiDzFBhvqk). Thanks for the valuable insights!

- Auto Height Animation: The auto height animation was implemented with guidance from [this video](https://www.youtube.com/watch?v=B_n4YONte5A) by the amazing [Kevin Powell](https://www.youtube.com/@KevinPowell). Many thanks to Kevin for sharing his expertise!

This project was created as part of the Temper Frontend Engineer Assignment. Special thanks to the team at Temper for the opportunity.

Feel free to reach out if you have any questions or need further assistance.
