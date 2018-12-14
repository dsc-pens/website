import { graphql } from 'gatsby'
import React from 'react'

import ExtLink from '../components/ExternalLink'
import JoinButton from '../components/JoinButton'
import PageLayout from '../layouts/PageLayout'

export const query = graphql`
  {
    links: allLinksJson {
      edges {
        node {
          id
          url
        }
      }
    }
  }
`

export default ({ data }) => {
  const getLink = linkid =>
    data.links.edges.map(i => ({ ...i.node })).find(({ id }) => id === linkid)
      .url

  return (
    <PageLayout pageTitle='About'>
      <section className='section'>
        <div className='container'>
          <div className='has-text-centered'>
            <h1 className='title'>About</h1>
            <p className='subtitle'>Get to know more about DSC PENS</p>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <h4 className='title is-4'>
                Learning by creating &nbsp;
                <i className='e1a-man_technologist_tone1' />
              </h4>
              <p>
                Getting to know new technologies by actually creating one, like
                developing{' '}
                <ExtLink href={getLink('pwa')}>Progressive Web Apps</ExtLink>
                {' with '}
                <ExtLink href={getLink('firebase')}>Firebase</ExtLink>
                {' integration, AR/VR apps using '}
                <ExtLink href={getLink('unity-ar-vr')}>Unity</ExtLink>
                {', and even try the latest programming languages like '}
                <ExtLink href={getLink('flutter')}>Flutter</ExtLink>
                {' and '}
                <ExtLink href={getLink('kotlin')}>Kotlin</ExtLink>.
              </p>
            </div>
            <div className='column'>
              <h4 className='title is-4'>
                Tailored for you &nbsp;
                <i className='e1a-man_teacher_tone1' />
              </h4>
              <p>
                We ensure that every learning resource is accessible and
                personalized for our members. From public repositories on{' '}
                <ExtLink href={getLink('dsc-gh')}>GitHub</ExtLink>, to
                step-by-step examples with source codes and images, no need to
                double-guess how stuff works.
              </p>
            </div>
          </div>
          <br />
          <div className='columns'>
            <div className='column'>
              <h4 className='title is-4'>
                Connect with people &nbsp;
                <i className='e1a-man_student_tone1' />
              </h4>
              <p>
                It's not just the place to learn, but a place to meet new people
                and new opportunities. Our various programs isn't fixed on one
                place or institution, our target is to expand the DSC circle to
                more areas.
              </p>
            </div>
            <div className='column'>
              <h4 className='title is-4'>
                Anyone can join &nbsp;
                <i className='e1a-man_astronaut_tone1' />
              </h4>
              <p>
                Our community is open for everyone, from middle and high school
                students, to senior engineers, and even people outside the tech
                field who wants to dive in and learn together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section has-text-centered'>
        <div className='container'>
          <div className='box' id='dsc-promotion'>
            <div className='dsc-max-tablet'>
              <h1 className='title'>
                Ready to learn? Join with us today. &nbsp;
                <i className='e1a-tada' />
              </h1>
              <p>
                Thank you for your interest in joining our community! Click the
                green button below to open the our registration form powered by
                Google Forms. We can't wait to see you.
              </p>
              <br />
              <JoinButton />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        #dsc-promotion {
          padding: 4rem 2rem;
        }
      `}</style>
    </PageLayout>
  )
}
