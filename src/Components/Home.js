import React, {Component} from 'react';
import { connect } from 'react-redux';


class Home extends Component{
    render(){
        const { posts} = this.props; // info du magasin
        const postData = posts.length ? (
            posts.map(post => {
                return (
                    <div className="base" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                    )
                })
                ) : (
                    <p>Aucun article pour le moment</p>
                    )
                    return (
                        <div className="home">
                        <h4>Page d'accueil</h4>
                        {postData}
                        </div>
                        )
                    }
                }
                
                const mapStateToProps = state => {
                    return {
                        posts: state.posts
                    }
                }
                
                
                
                export default connect(mapStateToProps)(Home);