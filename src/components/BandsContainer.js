import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log(this.props.bands);
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band }),
  deleteBand: band => dispatch({ type: "DELETE_BAND", id: band.id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
