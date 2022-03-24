import propTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Pagination extends Component {
    state = {
        isEditable: false,
        pageNo: '',
    };

    changeEditable = () => {
        const { isEditable } = this.state;
        // eslint-disable-next-line no-unused-vars
        this.setState({
            isEditable: !isEditable,
        });
    };

    handleChange = (e) => {
        this.setState({
            pageNo: e.target.value,
        });
    };

    render() {
        const { currentPage, totalPages, gotoPage, isNext, isPrev, next, previous } = this.props;
        const { isEditable, pageNo } = this.state;
        return (
            <div className="d-flex my-3 mb-5 " style={{ justifyContent: 'space-between' }}>
                <Button className="btn-sm" color="warning" disabled={!isPrev} onClick={previous}>
                    Previous
                </Button>
                {isEditable ? (
                    <div className="d-flex">
                        <Input type="text" value={pageNo} onChange={this.handleChange} />
                        <Button
                            className="btn-sm ml-2"
                            type="button"
                            onClick={() => {
                                this.changeEditable();
                                gotoPage(pageNo);
                            }}
                        >
                            Go
                        </Button>
                    </div>
                ) : (
                    <Button type="button" className="btn-sm" onDoubleClick={this.changeEditable}>
                        {currentPage} of {totalPages}
                    </Button>
                )}
                <Button className="btn-sm" color="warning" disabled={!isNext} onClick={next}>
                    Next
                </Button>
            </div>
        );
    }
}

propTypes.Pagination = {
    currentPage: propTypes.number.isRequired,
    totalPage: propTypes.number.isRequired,
    next: propTypes.number.isRequired,
    previous: propTypes.number.isRequired,
    gotoPage: propTypes.func.isRequired,
    isNext: propTypes.bool.isRequired,
    isPrev: propTypes.bool.isRequired,
};

export default Pagination;
