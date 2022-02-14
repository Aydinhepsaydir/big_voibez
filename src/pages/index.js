import * as React from "react"
import Layout from "../global/Layout";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import {
  PageContainer
} from '../components'

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
`

const TypeWriterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.p`
  margin: 0;
  margin-right: 8px;
`

const IndexPage = () => {
  const words = [
    'designer.',
    'baker.',
    'cyclist.',
    'festival-goer.',
    'gamer.'
  ]

  return (
    <Layout>
      <PageContainer>
        <TextContainer>
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Aydin Hepsaydir
          </h1>
          <TypeWriterContainer>
            <Text
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <span>
                Full stack engineer, but with just a dash of
              </span>
            </Text>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <Typewriter
                options={{
                  strings: words,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </TypeWriterContainer>
        </TextContainer>
      </PageContainer>
    </Layout>
  )
}

export default IndexPage
