import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {

  state = {
    feed: [],
  };

  async componentDidMount() {
    const res = await api.get("posts");
    this.setState({ feed: res.data });
  }

  render() {
    const { feed } = this.state;
    return (
      <section id="post-list">
        {feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>
              <img src={more} alt="Mais" />
            </header>
            <img src={`http://localhost:3333/files/${post.image}`} />
            <footer>
              <div className="actions">
                <img src={like} alt="Mais" />
                <img src={comment} alt="Mais" />
                <img src={send} alt="Mais" />
              </div>
              <strong>{post.likes} curtidas</strong>
              <p>
                {post.description}
              <span>{post.hastags}</span>
              </p>
            </footer>
          </article>
        ))}

      </section>
    );
  };
};

export default Feed;