import React from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My Posts</h1>
                <div className={css.SearchResults}>
                    {savedPosts.map((post, index) => {
                        return (
                            <div key={index} className={css.SearchItem}>
                                {/* For testing purposes, replace with actual post content later */}
                                <p>Individual Post</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Content