import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import actions from "store/actions";
import "./BlogList.css";
import laptop from "assets/laptop-mobile.jpeg";
import avatar from "assets/avatar.jpeg";
import { formatDate } from 'utils/helper';

class BlogList extends Component {
    state = {};

    componentDidMount() {
        this.props.getBlogList();
    }

    render() {
        const { blogList } = this.props;

        return (
            <div className="bloglist-wrapper">
                <div className="container">
                    <ul className="bloglist-content">
                        {blogList.map((item, index) => {
                            /* let date = new Date(item.lastUpdatedAt); */
                            let lastUpdatedAt = formatDate(item.lastUpdatedAt);
                            /* date .toLocaleString("default", {
                                        month: "long",
                                    }).substring(0, 3) +
                                " " +
                                date.getUTCDate(); */
                            return (
                                <Link to={`/article/${item._id}`}>
                                    <li key={index}>
                                        <div>
                                            <div className="description">
                                                <h2>{item.title}</h2>
                                                <p>{item.textPreview}</p>
                                            </div>
                                            <div className="author">
                                                <img src={avatar} alt="avatar" />
                                                <div>
                                                    <h6>Max Payne</h6>
                                                    <p>{lastUpdatedAt}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={laptop} alt="Image" height="300px" />
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogList: state.blogList,
    };
};

const mapDispatchToProps = {
    getBlogList: actions.getBlogList,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
