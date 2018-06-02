import React,{Component} from 'react'

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.state={term:''};
    }

    render(){
        return <input onChange={event => {this.onChangeInput(event.target.value)}} />
    }

    onChangeInput(term){
        this.setState({term:term});
        this.props.onSearch(term);
    };

    
}

export default SearchBar