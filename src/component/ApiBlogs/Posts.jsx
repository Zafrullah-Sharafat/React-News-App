/* eslint-disable react/no-array-index-key */
/* eslint-disable no-lone-blocks */
import propTypes from 'prop-types';
import React from 'react';
import { Button, Card, CardBody, CardImg } from 'reactstrap';

const stringToDate = (str) => new Date(str).toLocaleDateString();

const Posts = ({ posts, totalPages, totalResults, currentPage }) => (
    <>
        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
            <small>About {totalResults} results found</small>
            <small>
                {currentPage} of {totalPages}
            </small>
        </div>

        {posts.map((post, index) => (
            <Card key={index} className="my-2">
                <a href={post.url} target="blank">
                    <CardImg src={post.urlToImage} alt={post.title} />
                </a>
                <CardBody>
                    <h5>
                        <a href={post.url} target="blank">
                            {post.title}
                        </a>
                    </h5>
                    <p>{post.content}</p>
                    <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                        <small>Published at {stringToDate(post.publishedAt)}</small>
                        <Button className="btn-sm" color="light" type="disabled">
                            {post.source.name}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        ))}
    </>
);
propTypes.Posts = {
    posts: propTypes.array.isRequired,
    totalPages: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    totalResults: propTypes.number.isRequired,
};
export default Posts;
