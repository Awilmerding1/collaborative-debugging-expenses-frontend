import React from 'react'
import {connect} from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom';

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <span>
            <span style={{display: 'inline', float: 'right'}}>Total Balance: ${this.props.totalBalance}</span>
            <Switch>
                <Route path='/accounts/new' component={AccountInput}/>
                <Route path='/accounts/:id' render={(rProps) => <Account {...rProps} accounts={this.props.accounts}/>}/>
                <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
            </Switch>
          </span>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    totalBalance: state.totalBalance
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
