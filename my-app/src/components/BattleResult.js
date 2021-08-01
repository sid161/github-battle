import React, { Component } from 'react';

class BattleResult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstPlayerScore:0,
            secondPlayerScore:0,
            winner:undefined
        }
    }

    componentDidMount(){
        let firstPlayerScore = this.props.firstUser.followers * 20 + this.props.firstUser.public_repos;
        let secondPlayerScore = this.props.secondUser.followers * 20 + this.props.secondUser.public_repos;

        if(firstPlayerScore > secondPlayerScore){
            this.setState({
                firstPlayerScore:firstPlayerScore,
                secondPlayerScore:secondPlayerScore,
                winner:this.props.firstUser.name
            })
        } else if(firstPlayerScore < secondPlayerScore){
            this.setState({
                firstPlayerScore:firstPlayerScore,
                secondPlayerScore:secondPlayerScore,
                winner:this.props.secondUser.name
            })
        } else{
            this.setState({
                firstPlayerScore:firstPlayerScore,
                secondPlayerScore:secondPlayerScore,
                winner:"Its Tie"
            })
        }
    }
}

export default BattleResult