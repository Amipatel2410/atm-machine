import React, { Component } from 'react';

class Account extends Component{

  constructor()
  {
    super();
    this.state = {
      balance: 0
    }
    this.handleCurrentvalue = this.handleCurrentvalue.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
  }

  handleCurrentvalue(event){
    event.preventDefault();
    const balance = event.target.value;
    const regex = /([^0-9])/g;
    if(balance < 0 )
    {
      alert("error");
    }

    else if(regex.test(balance))
    {
      alert("Invalid input")
      return;
    }
    else {
    this.setState({
      inputbalance: parseFloat(balance)
    })
  }
  }

  handleDeposit(event){
    event.preventDefault();
      let newBalance = this.state.inputbalance + this.state.balance
      this.setState({
        balance: newBalance,
        inputbalance: 0
      })


  }

  handleWithdraw(event){
    event.preventDefault();
    let newBalancewith = this.state.balance - this.state.inputbalance
    if(newBalancewith<0)
    {
      alert("you don't have enough balance!!!")
    }
    else{
    this.setState({
      balance: newBalancewith,
      inputbalance: 0
       })
    }


  }

  renderaddClass()
  {
    if(this.state.balance === 0)
    {
      return "zero";
    }
    else{
      return "balance";
    }
  }

render(){
  return(

    <div>
      <h2> {this.props.name} </h2>
      <div className={this.renderaddClass()}>
      <h3> {this.state.balance}</h3>
      </div>
      <input type="text" onChange={this.handleCurrentvalue}/>
      <button onClick={this.handleDeposit}>Deposit</button>
      <button onClick={this.handleWithdraw}>Withdraw</button>
    </div>

    );
}

}


export default Account;
