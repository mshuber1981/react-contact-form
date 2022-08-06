import styled from "styled-components";

export const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  font-family: "Permanent Marker";

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
        : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
  }
`;
