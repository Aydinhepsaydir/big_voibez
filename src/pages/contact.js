import React from 'react'
import Layout from '../global/Layout'
import { PageContainer } from '../components'
import styled from 'styled-components'

const Text = styled.p`
  margin: 24px 0;

  @media (max-width: 600px) {
    margin: 8px 0;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <PageContainer>
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          Hi :wave:
        </h1>
        <Text
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          I'm currently working as full stack engineer over at Bamboo Loans.
        </Text>
        <Text
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          I've worked with<a href="https://www.and.digital/">digital consultancies</a> in
          the past, and also co-founded and ran a
          <a href="https://www.oneconsultinggroup.org/">COVID relief charity</a> which
          saw some success in aleviating lonliness in the UK during lockdown.
        </Text>
        <Text
          data-aos="fade-up"
          // data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          I've also done some freelance work for people looking for their own personal
          corner of the web, like
          <a href="https://alexlyonmusic.com/">this</a> or
          <a href="https://www.eat4climate.co.uk/">this</a>.
        </Text>
      </PageContainer>
    </Layout>
  )
}

export default ContactPage