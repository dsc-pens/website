import React from 'react'
import Image from 'react-medium-image-zoom'
import Select from 'react-select'

import Loading from '../components/Loading'
import Layout from '../layouts/Layout'
import { fetchGalleryImages, fetchRef } from '../lib/Operations'
import SS from '../lib/SessionStorage'

export default class extends React.Component {
  state = {
    filter: null,
    lbActive: false,
    /** @type {Array} */
    images: SS.get('landing:images') || [],
    /** @type {Array} */
    programs: SS.get('landing:programs') || [],
    /** @type {Array} */
    teams: SS.get('landing:teams') || [],
  }

  componentDidMount() {
    const { images, programs, teams } = this.state

    if ([images, programs, teams].some(a => a.length <= 0))
      Promise.all(
        ['programs', 'teams'].map(ref =>
          fetchRef(ref).then(value => {
            SS.set(`landing:${ref}`, value)
            this.setState({ [ref]: value })
            return
          })
        )
      )
        .then(() =>
          Promise.all(
            this.state.programs.map(async ({ id, teams }) => {
              if (teams instanceof Array) {
                return Promise.all(
                  teams.map(async team => {
                    const data = await fetchGalleryImages(`${id}/${team}`)
                    return data.map(i => ({ ...i, team }))
                  })
                )
              }
            })
          )
        )
        .then(imgs => {
          const images = imgs
            .filter(c => c !== undefined)
            .map(c => c.filter(i => i.length > 0))
            .flat(2)
            .sort((a, b) => {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
          SS.set(`landing:images`, images)
          this.setState({ images })
        })
  }

  lightboxClose() {
    this.setState({ lightbox: { isOpen: false } })
  }

  render() {
    const { filter, images, programs, teams } = this.state
    const isFetched = [images, programs, teams].every(a => a.length > 0)

    /** @type {String[]} */
    const allSortedTeams = programs
      .filter(({ id, teams }) =>
        filter && filter.value !== '' && teams ? id === filter.value : true
      )
      .map(p => p.teams)
      .flat()
      .sort()

    const List = () =>
      isFetched ? (
        allSortedTeams.map(t => {
          const imgs = images.filter(({ team }) => team === t)
          if (imgs.length > 0) {
            const { name } = teams.find(({ id }) => id === t)
            const [limit, setLimit] = React.useState(4)
            return (
              imgs.length > 0 && (
                <React.Fragment key={t}>
                  <h4 className='title is-4'>{name}</h4>

                  <div className='columns'>
                    {imgs.slice(0, limit).map(i => (
                      <React.Fragment key={i.name}>
                        <div className='column is-one-quarter'>
                          <figure className='box image'>
                            <Image image={{ src: i.url, alt: i.name }} />
                          </figure>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  {imgs.length > limit && (
                    <button
                      type='button'
                      className='button is-primary'
                      onClick={() => setLimit(limit + 8)}
                    >
                      Load more images
                    </button>
                  )}
                  <hr />
                </React.Fragment>
              )
            )
          }
        })
      ) : (
        <Loading />
      )

    const Filter = () =>
      programs.length > 0 && (
        <div className='dsc-max-tablet'>
          <Select
            isClearable
            isSearchable
            onChange={v => this.setState({ filter: v })}
            options={programs
              .filter(p => p.teams !== undefined)
              .map(({ id, name }) => ({ label: name, value: id }))}
            value={this.state.filter}
          />
        </div>
      )

    return (
      <Layout pageTitle='Gallery'>
        <section className='section'>
          <div className='container'>
            <div className='has-text-centered'>
              <h1 className='title'>Gallery</h1>
              <p className='subtitle'>
                Collection of all DSC PENS members' creations
              </p>
              <br />
              <Filter />
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container has-text-centered'>
            <List />
          </div>
        </section>

        <style global jsx>{`
          .columns {
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </Layout>
    )
  }
}
