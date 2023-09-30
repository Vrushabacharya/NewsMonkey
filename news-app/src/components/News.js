import React, { Component } from 'react';
import Newsitems from './Newsitems';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual News API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550&pageSize=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok') {
        this.setState({ articles: data.articles, loading: false });
      } else {
        console.error('Failed to fetch news data.');
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error('An error occurred while fetching news data:', error);
      this.setState({ loading: false });
    }
  }

  handlePrevious = async () => {
    const { page } = this.state;
    if (page <= 1) return;

    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual News API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550&page=${page - 1}&pageSize=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok') {
        this.setState({
          page: page - 1,
          articles: data.articles,
        });
      } else {
        console.error('Failed to fetch news data.');
      }
    } catch (error) {
      console.error('An error occurred while fetching news data:', error);
    }
  };

  handleNext = async () => {
    const { page } = this.state;

    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual News API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=23e2b229d67b417d9844262da6584550&page=${page + 1}&pageSize=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok') {
        this.setState({
          page: page + 1,
          articles: data.articles,
        });
      } else {
        console.error('Failed to fetch news data.');
      }
    } catch (error) {
      console.error('An error occurred while fetching news data:', error);
    }
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className="grid gap-3">
        <h1>News of the day</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
