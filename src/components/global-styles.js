import { rhythm } from "../utils/typography"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`  
  :root {
    --color-dark: rgba(8, 7, 8, 1);
    --color-light: rgba(252, 252, 252, 1);
    --color-accent-1: rgba(130, 2, 99, 1);
    --color-accent-2: rgba(217, 3, 104, 1);
    --color-accent-3: rgba(246, 174, 40, 1);
    --color-accent-4:  rgba(26, 200, 237, 1);
    --color-accent-4:  rgba(247, 92, 3, 1);
    --color-accent-5:  rgba(232, 232, 232, 1);
    --color-accent-6:  rgba(239, 35, 60, 1);
    --color-accent-7:  rgba(76, 185, 99, 1);

    --gradient-bottom: linear-gradient(180deg, rgba(8, 7, 8, 1), rgba(130, 2, 99, 1), rgba(217, 3, 104, 1), rgba(246, 174, 40, 1));
    --gradient-section-highlight: linear-gradient(45deg, rgba(130, 2, 99, 1), rgba(217, 3, 104, 1));
  }

  $shadow-dark-heaviest: rgba(8, 7, 8, .95);
  $shadow-dark-heavy: rgba(8, 7, 8, .80);
  $shadow-dark-medium: rgba(8, 7, 8, .65);
  $shadow-dark-light: rgba(8, 7, 8, .5);
  $shadow-dark-lightest: rgba(8, 7, 8, .25);

  * {
    border: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--color-dark);
    background: var(--color-light);
  }

  a,
  a:link,
  a:visited {
    color: var(--color);
  }

  a:hover {
    filter: brightness(.8);
  }

  .btn {
    &,
    &:link,
    &:visited {
      background: linear-gradient(rgba(217, 3, 104, 1), rgba(130, 2, 99, 1));
      border: 1px solid var(--color-accent-1);
      box-shadow: none;
      border-radius: 3px;
      color: var(--color);
      padding: ${rhythm(0.25)} ${rhythm(0.75)};
      text-shadow: 2px 2px 2px rgba(8, 7, 8, 0.25);
      transition: all .3s;
    }

    &:active {
      background: linear-gradient(rgba(217, 3, 104, .85), rgba(130, 2, 99, .85));
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --color: var(--color-dark);
      --background: var(--color-light);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color: var(--color-light);
      --background: var(--color-dark);
    }

    blockquote {
      color: #bbb;
      border-left-color: #444;
    }
  }
`

const Container = styled.div`
  width: 100%;
`

const Main = styled.main`
  background-color: var(--background);
  color: var(--color);
  min-height: 81vh;
`

const SectionWrapper = styled.div`
  background-color: var(
    ${props => (props.primary ? "--color-light" : "--color-dark")}
  );
  color: var(${props => (props.primary ? "--color-light" : "--color")});

  & > section {
    max-width: ${rhythm(24)};
    margin: 0 auto;
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }
`

export { GlobalStyles, Container, Main, SectionWrapper }