
        import React, { Component }             from 'react';
        import { Redirect }                     from 'react-router';
        import { connect }                      from 'react-redux';
        import { bindActionCreators }           from 'redux';

        class App extends Component {
            constructor(props) {
                super(props);
                this.state = {
                }
            }

            render = () => {
                return(
                    {this.props.children}
                )
            }
     
        }

        function mapStateToProps(state) {
            return {}
          }

          
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({  }, dispatch);
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(App);
        