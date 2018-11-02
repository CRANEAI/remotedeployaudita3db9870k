/*
create account view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

create account view has Label located at the very-top left of the view, text needs identified
create account view has Label located at the top left of the view, text needs identified
create account view has Label located at the mid-top left of the view, text needs identified
create account view has Label located at the mid-top left of the view, text needs identified

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Button } from "reactstrap"

import { sign_up_action } from "../actions/create_accountActions.js"

class createaccountView extends React.Component {
  state = {
    show_loading_indicator: false
  }

  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    //Dispatch action mapped to redux
    sign_up_action()

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              <p className="label-black-white-headline"> title 50 </p>
            </Col>

            <Col md={12}>
              <p className="label-white-standard-large"> title 40 </p>
            </Col>

            <Col md={12}>
              <p className="label-black-white-medium"> title 30 </p>
            </Col>

            <Col md={12}>
              <p className="label-white-standard-medium"> title 20 </p>
            </Col>

            <Col md={12}>
              {/* <!-- TODO: Create unit test for user_name button-light-turquoise-light-sky-blue-small action --> */}
              <Button
                className="btn btn-lg btn-block button-light-turquoise-light-sky-blue-small"
                onClick={() => this.user_name()}
              >
                user name
              </Button>
            </Col>

            <Col md={12}>
              {/* <!-- TODO: Create unit test for create_account button-light-turquoise-light-sky-blue-small action --> */}
              <Button
                className="btn btn-lg btn-block button-light-turquoise-light-sky-blue-small"
                onClick={() => this.create_account()}
              >
                create account
              </Button>
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.create_account
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sign_up_action }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createaccountView)
