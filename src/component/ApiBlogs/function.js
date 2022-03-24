/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import axios from './axiosSetup';
/* eslint-disable no-underscore-dangle */
class NewsClass {
    constructor(category) {
        this.category = category;
        this.searchTerm = '';
        this.pageSize = 10;
        this.currentPage = 1;
        this.totalPages = 1;
    }

    async getNews() {
        const url = this._getUrl();
        try {
            const { data } = await axios.get(url);
            this.totalPages = Math.ceil(data.totalResults / this.pageSize);
            const sources = {
                posts: data.articles,
                totalResults: data.totalResults,
                currentPage: this.currentPage,
                totalPages: this.totalPages,
                category: this.category,
                isNext: this.isNext(),
                isPrev: this.isPrev(),
            };
            return sources;
        } catch (e) {
            return e;
        }
    }

    setCategory(category) {
        this.category = category;
        return this.getNews();
    }

    searchNews(searchTerm) {
        this.searchTerm = searchTerm;
        return this.getNews();
    }

    next() {
        if (this.isNext) {
            this.currentPage += 1;
        }
        return this.getNews();
    }

    prev() {
        if (this.isPrev) {
            this.currentPage -= 1;
        }
        return this.getNews();
    }

    gotoPage(pageNumber) {
        this.currentPage = pageNumber;
        return this.getNews();
    }

    isNext() {
        if (this.currentPage < this.totalPages) {
            return true;
        }
        return false;
    }

    isPrev() {
        if (this.currentPage > 1) {
            return true;
        }
        return false;
    }

    _getUrl() {
        let url = `/?category=${this.category}&country=us`;
        if (this.searchTerm) {
            url += `&q=${this.searchTerm}`;
        }
        if (this.pageSize) {
            url += `&pageSize=${this.pageSize}`;
        }
        if (this.currentPage) {
            url += `&page=${this.currentPage}`;
        }
        return url;
    }
}

export default NewsClass;
