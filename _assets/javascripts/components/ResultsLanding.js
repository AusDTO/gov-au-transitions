import React, { Component } from 'react'
import ResultsTilesConnect from '../containers/ResultsTilesConnect'
import AsideNavLink from '../containers/AsideNavLink'
import ResultsMenu from './ResultsMenu'

class Results extends Component {
  constructor() {
    super();
    this.toggleResults = this.toggleResults.bind(this);
    this.state = {
      resultsOpen: false
    }
  }

  toggleResults(e) {
    e.preventDefault()
    this.setState({ resultsOpen: !this.state.resultsOpen })
  }

  render() {
    const { show, showResults, resultSets } = this.props

    if (!show) {
      return (<div />)
    }

    const { resultsOpen } = this.state

    return (
      <div className="results-landing">
        <div className='hero-med'>
          <div className='wrapper'>
            <h1>Explore your results</h1>
          </div>
        </div>
        <main role='main'>
          <article>
            <aside className="sidebar">
              {showResults ? <ResultsMenu onClick={this.toggleResults} open={resultsOpen} resultSets={resultSets}/> : ''}
              <AsideNavLink className="hide-for-mobile" />
            </aside>
            <article className='transition-main content-main'>
              <p className='abstract'>Select next steps and local services from your topics below.</p>
              <ResultsTilesConnect />
              <h2 className="secondary-title">Also explore</h2>
              <ul className="secondary-links">
                <li><a href="">Managing your medicines</a></li>
                <li><a href="">Organising consents such as powers of attorney</a></li>
                <li><a href="">Support for carers</a></li>
              </ul>
            </article>
          </article>
          <article>
              <AsideNavLink className="show-for-mobile" />
          </article>
        </main>
      </div>
    )
  }
}

export default Results
