import React from 'react'

class BlogToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }



    render() {
        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        const blogStyle = {
            paddingTop: 10,
            paddingLeft: 2,
            border: 'solid',
            borderWidth: 1,
            marginBottom: 5
        }

        return (
            <div>
                <div style={blogStyle} >
                    <div style={hideWhenVisible}>
                        <div onClick={this.toggleVisibility}>{this.props.blog.title} {this.props.blog.author}</div>
                    </div>

                    <div style={showWhenVisible}>
                        <div onClick={this.toggleVisibility}>{this.props.blog.title} {this.props.blog.author}</div>
                        <div> {this.props.blog.url} </div>
                        <div> 
                            {this.props.blog.likes}
                            <button onClick={async () => this.props.handleLikeButton(this.props.blog._id)}> like </button>
                        </div>
                        <div> Added by: {this.props.blog.user.username} </div>
                        <div> <button onClick={async () => this.props.handleDeleteBlogButton(this.props.blog._id)}> delete </button> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogToggle