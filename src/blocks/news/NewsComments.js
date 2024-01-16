import React from 'react';
import CommentForm from '../../components/form/CommentForm';
import CommentsReply from '../../components/button/CommentsReply';

const NewsComments = () => {
    return (
        <div id="comments" className="comments-area spacer m-top-xl">
            <div className="comment-title">
                <h4>Comments (1)</h4>
            </div>

            <ul className="comment-list list-unstyled style-default">
                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-content">
                                <div className="comment-content-left">
                                    <div className="comment-img">
                                        <img src="assets/img/placeholder/97x97.jpg" alt="Rosie Ford" />
                                    </div>
                                </div>

                                <div className="comment-content-right">
                                    <h6 className="comment-author after">
                                        <a title="Rosie Ford" href={ process.env.PUBLIC_URL + "/news-single-post" }>Rosie Ford</a>
                                    </h6>

                                    <div className="comment-time">
                                        <p>29 February, 2020 3:23 pm</p>
                                    </div>

                                    <div className="comment-description">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>

                                    <CommentsReply />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="block spacer m-top-xl">
                <div id="respond" className="comment-respond">
                    <h4 id="reply-title" className="comment-reply-title">Leave a reply
                        <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link border-0 p-0 min-w-auto link-no-space" href={ process.env.PUBLIC_URL + "/news-single-post" } style={ { display: "none" } }>Cancel reply</a>
                    </h4>

                    <CommentForm />
                </div>
            </div>
        </div>
    );
};

export default NewsComments;
