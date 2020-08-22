import React from 'react';

class BlogCard extends React.Component {


    state = { color: 'grey', clicked: true, isliked: this.props.blog.likes }

    liked = () => {

        this.setState({ clicked: !this.state.clicked });

        if (this.state.clicked === true) {
            this.setState({
                color: 'red',
                isliked: this.state.isliked + 1
            });
        }

        if (this.state.clicked === false) {
            this.setState({
                color: 'grey',
                isliked: this.state.isliked - 1
            });
        }

    }


    render() {

        const { imageUrl, title, body, likes, username } = this.props.blog;

        return (
            <div className="teal card">
                <div className="blurring dimmable image">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img className="image" src={imageUrl} style={{ height: '250px' }} />
                </div>
                <div className="content">
                    <a className="header">{title}</a>
                    <div className="meta">
                        <span className="date">{body}</span>
                    </div>
                </div>
                <div className="extra content">
                    <span className="left floated like">
                        <i className="heart icon" style={{ color: this.state.color }} onClick={this.liked}></i>
                        {this.state.isliked} likes
                    </span>
                    <span class="right floated star">
                        <i class="user icon"></i>
                        {username}
                    </span>
                    <a>
                    </a>
                </div>
            </div>
        )
    }
}

export default BlogCard;