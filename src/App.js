import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import fetchPostsAction from './fetchPosts'
import Header from './components/Header'
import PostsSection from './components/PostsSection'

const mapStateToProps = state => {
  const posts = state.reducer.posts
  const error = state.reducer.error
  const loading = state.reducer.loading
  const userPosts = state.reducer.userPosts
  const myPosts = state.reducer.myPosts
  return {
    posts: posts,
    loading: loading,
    userPosts: userPosts,
    myPosts: myPosts,
    error: error
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts: fetchPostsAction
    },
    dispatch
  )

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      posts: [],
      userPosts: this.props.userPosts,
      myPosts: this.props.myPosts
    }
  }

  componentWillMount () {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.posts !== this.props.posts) {
      return true
    }
  }

  render () {
    return (
      <div className='App'>
        <Header/>
        <PostsSection
          myPosts={this.props.myPosts}
          userPosts={this.props.userPosts}
          loading={this.props.loading}
          error={this.props.error}
        ></PostsSection>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
