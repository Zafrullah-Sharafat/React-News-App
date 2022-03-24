/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NewsClass from './function';
import Header from './Header';
import Loading from './Loading';
import Pagination from './Pagination';
import Posts from './Posts';

const categories = ['entertainment', 'technology', 'business', 'health'];
const newsClass = new NewsClass('technology');

class ApiBlogs extends Component {
    state = {
        isLoading: true,
        data: {
            category: 'business',
            totalPages: 1,
            currentPage: 1,
            totalResults: '',
            posts: [],
            isNext: true,
            isPrev: true,
        },
    };

    componentDidMount() {
        newsClass
            .getNews()
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    }

    performSearch = (searchTerm) => {
        this.setState({
            isLoading: true,
        });
        newsClass
            .searchNews(searchTerm)
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    };

    changeCategory = (category) => {
        this.setState({
            isLoading: true,
        });
        newsClass
            .setCategory(category)
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    };

    nextPage = () => {
        this.setState({
            isLoading: true,
        });
        newsClass
            .next()
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    };

    previousPage = () => {
        this.setState({
            isLoading: true,
        });
        newsClass
            .prev()
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    };

    gotoPage = (pageNo) => {
        this.setState({
            isLoading: true,
        });
        newsClass
            .gotoPage(pageNo)
            .then((data) => {
                this.setState({
                    data,
                    isLoading: false,
                });
            })
            .catch((e) => console.log(e));
    };

    render() {
        const { data, isLoading } = this.state;
        const { posts, currentPage, totalPages, totalResults, category, isNext, isPrev } = data;
        return (
            <Container>
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Header
                            categories={categories}
                            performSearch={this.performSearch}
                            changeCategory={this.changeCategory}
                            selectedCategory={category}
                        />
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <>
                                <Posts
                                    posts={posts}
                                    totalPages={totalPages}
                                    totalResults={totalResults}
                                    currentPage={currentPage}
                                />
                                <Pagination
                                    isNext={isNext}
                                    isPrev={isPrev}
                                    next={this.nextPage}
                                    previous={this.previousPage}
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    gotoPage={this.gotoPage}
                                />
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ApiBlogs;
