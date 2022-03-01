import Head from 'next/head';
import styled from 'styled-components';

// * sc - styled component
// * scpt - use props.theme

export default function Home() {
  return (
    <div>
      <Head>
        <title>Interactive Pricing Component</title>
        <meta name='description' content='Interactive Pricing Component' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
      </header>
      <card>
        <p>Page Views</p>
        <p>Bar</p>
        <p>£ /month</p>
        <p>Monthly Billing Yearly Billing 25% discount</p>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button>Start my trial</button>
      </card>
    </div>
  );
}
