import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Post from '.\\Post.js';

class Home extends Component{
    
    render(){   
        const {posts} = this.props; // info du magasin

        const postData = posts.length ? (
            posts.map(post => {
                return (
                    <div>
                    <BrowserRouter>
                    <div className="base" key={post.id}>
                    <Route path="/:post_id" component={Post}/>
                    <Link to={"/" + post.id}>
                    <h2>{post.title}</h2>
                    </Link> 
                    <p>{post.body}</p>
                    </div>
                    </BrowserRouter>
                    </div>
                    )
                })
                ) : (
                    <p>Il n'y a aucun article en cours</p>
                    )
                    return (
                        <div className="home">
                        <h4>Page d'accueil</h4>
                        {postData}
                        </div>
                        )
                    }
                }
                
                const mapStateToProps = (state) => {
                    return {
                        //posts: state.posts
                    }
                }
                
                
                
                export default connect(mapStateToProps)(Home);