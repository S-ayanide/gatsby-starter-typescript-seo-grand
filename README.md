# gatsby-starter-typescript-seo-grand 🌟

### An opinionated starter library for creating React applications with Gatsby (v2) and TypeScript along with good SEO and PWA support.

### [View Demo](https://gatsby-starter-typescript-deluxe.netlify.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/597e0057-8bee-4e33-a49f-1988d2c203ce/deploy-status)](https://app.netlify.com/sites/gatsby-starter-typescript-seo-grand/deploys)

This starter library is pre-configured with the following integrations:

-   **TypeScript** for type-safe code.
-   **Styled-Components** for all your styles.
-   **modern-css-reset** for a reset of sensible default styles.
-   **gatsby-image and gatsby-transformer-sharp** for optimized images.
-   **gatsby-plugin-manifest / SEO component** for an SEO-friendly PWA.
-   **Jest and React Testing library** for snapshots and unit tests.
-   **ESLint with an emphasis on functional patterns (with Prettier and TypeScript integration)** to make your code look its best.
-   **React Axe and React A11y for accessibility** so that your site is awesome for everyone.

## Installation

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally.

The `npx` way:

```sh
npx gatsby new my-site https://github.com/S-ayanide/gatsby-starter-typescript-seo-grand
```

or the global way:

```sh
npm i -g gatsby-cli
gatsby new my-site https://github.com/S-ayanide/gatsby-starter-typescript-seo-grand
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script       | Description                                                                         |
| ------------ | :---------------------------------------------------------------------------------- |
| `dev`        | Start the development server with hot module reloading.                             |
| `format`     | Format your code with Prettier.                                                     |
| `clean`      | Delete the `.cache` and `public` directories.                                       |
| `test`       | Run your Jest tests once.                                                           |
| `test:watch` | Run your Jest tests in watch mode.                                                  |
| `lint`       | Lint your code with ESLint.                                                         |
| `lint:watch` | Lint your code with ESLint in watch mode.                                           |
| `lint:fix`   | Lint your code with ESLint and attempt to fix linting issues.                       |
| `serve`      | Serve the production build of your site for testing.                                |
| `build`      | Compile your application and make it ready for deployment                           |
| `update`     | Updates the package.json to the latest dependency versions using npm-check-updates. |

## Styling

This library is pre-configured with [styled-components](https://www.styled-components.com/).

#### Global Styles

Global styles are defined in the `src/styles/global.css` file.

The global style also includes the styles from [css-modern-reset](https://github.com/hankchizljaw/modern-css-reset), which aims to provide a sensible reset of browser styles.

#### Theme

You can define your theme styles in the `/src/styles/theme` file. The theme will be available in any styled-component via `props.theme` and to any other component via the `useTheme` hook.

#### Handling Media Queries

The theme utilizes the [use-media](https://github.com/streamich/use-media) library, which allows you to track the state of a CSS media queries. This works by passing a boolean for each screen size that you defined in your theme. Just define your screen sizes in `src/styles/theme`.

#### Styling Examples

**`src/pages/about.tsx` includes various examples (with comments) of using styled-components with the theme provider.**

#### The CSS Prop

This starter is also preconfigured to work with the `css` prop:

```jsx
import styled from "styled-components";

const MyComponent = () => (
	<div>
		<h1
			css={`
				color: #333;
			`}
		>
			Hello World!
		</h1>
	</div>
);
```

_Note: The `css` prop does not play nicely with the `jsx-no-multiline-js` ESLint rule. You may want to disable the rule if you plan on using the `css` prop. This can be done in the `.eslintrc.js` file._

I personally do not use the `css` prop and prefer to define styled-components outside of the component definition. My general rule is if the component that is using a styled-component is the only component that uses it, I define the styled-component in the same file. Otherwise, I will move it out to a `components/common` directory.

```tsx
import styled from "styled-components";

const Heading = styled.h1`
	color: #333;
`;

const MyComponent = () => (
	<div>
		<Heading>Hello World!</Heading>
	</div>
);
```

## Preview

<img src="https://i.ibb.co/vV515Kt/Gatsby.png" alt="Gatsby Starter Typescript SEO Grade Preview" style="max-width: 100%;" />

## Linting

This project includes a combination of ESLint and React-A11y rules for React and TypeScript code, which are extended from the [eslint-config-gojutin](https://github.com/gojutin/eslint-config-gojutin) npm package. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Since all of the rules and dependencies are included in this package, you can easily remove it if you prefer to wire up your own linting configuration.

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

|     |       |
| --- | :---- |
| `0` | off   |
| `1` | warn  |
| `2` | error |

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.

## Deployment

Lint your files and fix all linting issues.

```sh
npm run lint
```

Run your test suite and fix any broken tests.

```sh
npm run test
```

Compile a production build to the `/public` directory.

```sh
npm run build
```

## Lighthouse Audit Score 💯

<img src="https://i.ibb.co/3NpYMsT/Lighthouse-Audit.png" style="max-width: 100%;" alt="Lighthouse Score" />

## TODOS

-   Write more robust unit tests for all components and custom hook.
-   Possibly add support for MDX and markdown.

That's about it. Now, build something awesome 😀
