import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: #ffefd5;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Interactive Pricing Component</title>
        <meta name='description' content='Interactive Pricing Component' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <Title>My page</Title>
      </Wrapper>
    </div>
  );
}
