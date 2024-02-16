import React, { Component } from 'react';
import Newsitems from './Newsitems';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async fetchNewsData(page) {
    const { country, category } = this.props;
    const apiKey = '23e2b229d67b417d9844262da6584550';
    const pageSize = 20;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch news data. Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 'ok') {
        return data.articles;
      } else {
        throw new Error('Failed to fetch news data.');
      }
    } catch (error) {
      console.error('An error occurred while fetching news data:', error.message);
      return [];
    }
  }

  async componentDidMount() {
    console.log("cdm");
    const articles = await this.fetchNewsData(1);
    this.setState({ articles, loading: false });
  }

  handlePrevious = async () => {
    const { page } = this.state;
    if (page <= 1) return;

    const newPage = page - 1;
    const newArticles = await this.fetchNewsData(newPage);

    this.setState((prevState) => ({
      page: newPage,
      articles: newArticles,
    }));
  };

  handleNext = async () => {
    const { page } = this.state;
    const newPage = page + 1;
    const newArticles = await this.fetchNewsData(newPage);

    this.setState((prevState) => ({
      page: newPage,
      articles: newArticles,
    }));
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className="grid gap-3">
        <h1>News of the day</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.length > 0 ? (
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-3" key={element.url}>
                  <Newsitems
                    newsurl={element.url}
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description.slice(0, 45) : ''}
                    imageurl={element.urlToImage}
                    author={element.author}
                    Date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>No articles found.</p>
          )
        )}
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={page <= 1} onClick={this.handlePrevious} className="btn btn-dark">
            Previous
          </button>
          <button type="button" onClick={this.handleNext} className="btn btn-dark">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
