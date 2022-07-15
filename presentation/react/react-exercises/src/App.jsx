import React from "react";
import {postFetchRequestAction, postFetchSuccess} from "./store/actions";
import {connect} from "react-redux";

class App extends React.Component {

    componentDidMount() {
        this.props.postFetchRequestAction()
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                this.props.postFetchSuccess(posts)
            })
    }

    render() {
        return (
            <div className="App">
                <ul>
                {this.props.posts.map(post => (
                    <li>{post.title}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
})
const mapDispatchToProps = {
    postFetchRequestAction,
    postFetchSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

