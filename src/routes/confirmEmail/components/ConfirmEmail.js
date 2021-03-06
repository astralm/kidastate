import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';



class ConfirmEmail extends React.Component {
  render(){
    return <div className="body-inner">
      <div className="card bg-color-white">
        <div className="card-content">
          <div className="logo text-center">
            <a >Confirm Email</a>
          </div>

          <div>
            <p className="confirm-mail-icon"><span className="material-icons">mail_outline</span></p>
            <p className="text-center text-small no-margin">
              An email has been send to <strong>{this.props.email}</strong>. Please check for an email from us and click on the included link to reset your password.
           </p>
          </div>

        </div>
      </div>
      <div className="additional-info">
        <span>Return to <a href="#/login">Login</a></span>
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  email: state.app.getIn(['user', 'email'])
});

const ConfirmEmailContainer = connect(mapStateToProps)(ConfirmEmail);

const Page = () => (
  <div className="page-auth page-confirm-email">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <ConfirmEmailContainer />
        </div>
      </QueueAnim>
    </div>
  </div>
);

module.exports = Page;

