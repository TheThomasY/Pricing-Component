import Head from 'next/head';

// * Styled Components
import styled from 'styled-components';

// * Components
import Header from '../components/Header';
import Card from '../components/Card';

// * sc - styled component
// * scpt - use props.theme

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Interactive Pricing Component</title>
        <meta name='description' content='Interactive Pricing Component' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Card />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 5rem;
  width: 88%;
  max-width: 54rem;
  margin-inline: auto;
`;
