import React from 'react';
import Loader from './Loader';
import SingleArticle from './SingleArticle';

class Languages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arrData:null,
        }
    }

    componentDidMount(){
        let lang = this.props.match.params.lang;
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`)
        .then((res) => res.json())
        .then((data) => this.setState({arrData:data.items}))
    }

    componentDidUpdate(prevProps,prevState){
        let lang = this.props.match.params.lang;
        if(prevProps.match.params.lang !== this.props.match.params.lang){
            fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => this.setState({arrData: data.items}))
        }
    }

    componentWillUnmount(){
        console.log("Component unmounted")
    }
    render(){
        
            if(!this.state.arrData){
                return <Loader/>
            } else{
                return(
                    <div className = "flex">
                        {this.state.arrData.map((elm) => {
                            return(
                                <SingleArticle data = {elm} index = {i} key={i}></SingleArticle>
                            )
                        })}
                    </div>
                )
            }

    }


}


export default Languages;