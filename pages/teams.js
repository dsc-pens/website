import cns from '@sindresorhus/class-names'
import Link from 'next/link'
import React from 'react'

import Loading from '../components/Loading'
import Layout from '../layouts/Layout'
import { fetchRef } from '../lib/Operations'

export default class extends React.Component {
  state = {
    programs: [],
    teams: [],
  }

  componentDidMount() {
    const SS = sessionStorage || window.sessionStorage

    this.setState({
      programs: JSON.parse(SS.getItem('landing:programs')) || [],
      teams: JSON.parse(SS.getItem('landing:teams')) || [],
    })

    const { programs, teams } = this.state

    if ([programs, teams].some(a => a.length <= 0)) {
      ;['programs', 'teams'].forEach(ref =>
        fetchRef(ref).then(value => {
          SS.setItem(`landing:${ref}`, JSON.stringify(value))
          this.setState({ [ref]: value })
        })
      )
    }
  }

  render() {
    const { programs, teams } = this.state

    const List = () =>
      programs.length > 0 ? (
        programs.map(
          p =>
            p.teams && (
              <div key={p.id} className='column is-one-third'>
                <i className={cns('e1a-lg', p.icon)} />
                <h4 className='title is-4'>{p.name}</h4>
                <hr />
                <div className='content'>
                  {teams.length > 0 &&
                    p.teams.map(t => (
                      <p key={t}>{teams.find(team => team.id === t).name}</p>
                    ))}
                </div>
              </div>
            )
        )
      ) : (
        <Loading />
      )

    return (
      <Layout title='Teams'>
        <section className='section'>
          <div className='container'>
            <div className='has-text-centered'>
              <h1 className='title'>Teams</h1>
              <p className='subtitle'>
                List of teams from all our programs on DSC PENS
              </p>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container has-text-centered'>
            <div className='columns'>
              <List />
            </div>
            <br />
            <Link href='/gallery'>
              <a className='button is-primary'>View in Gallery</a>
            </Link>
          </div>
        </section>

        <style jsx>{`
          .columns {
            flex-wrap: wrap;
            justify-content: center;
          }
        `}</style>
      </Layout>
    )
  }
}
