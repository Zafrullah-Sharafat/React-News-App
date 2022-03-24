/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import propTypes from 'prop-types';
import { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Header extends Component {
    state = {
        searchTerm: '',
    };

    handelInput = (e) => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.performSearch(this.state.searchTerm);
        }
    };

    render() {
        const { searchTerm } = this.state;
        const { performSearch, changeCategory, categories, selectedCategory } = this.props;
        return (
            <div className="mb-5">
                <h1 className="display-4 my-4" style={{ fontSize: 35 }}>
                    Block Buster Heading
                </h1>
                <Input
                    onChange={this.handelInput}
                    onKeyPress={this.handleKeyPress}
                    value={searchTerm}
                    placeholder="Type anything and press enter to search"
                />
                {categories.map((category, index) => (
                    <Button
                        key={index}
                        type="button"
                        className="btn-sm mr-2 my-2"
                        onClick={() => {
                            changeCategory(category);
                        }}
                        color={category === selectedCategory ? 'warning' : 'light'}
                    >
                        # {category.toUpperCase()}
                    </Button>
                ))}
            </div>
        );
    }
}

Header.propTypes = {
    performSearch: propTypes.func.isRequired,
    changeCategory: propTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    categories: propTypes.array.isRequired,
    selectedCategory: propTypes.string.isRequired,
};
export default Header;
