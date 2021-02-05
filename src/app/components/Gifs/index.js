import React, { useState, useEffect } from 'react';
import { API_KEY } from '../../apikey';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Gif from '../Gif';
import './index.scss';

function Gifs({ value }) {
  const [gifs, setGifs] = useState([]);
  const [start, setStart] = useState(12);
  const [hasMore, setHasMore] = useState(true);

  const url = 'https://api.giphy.com/v1/gifs/search';

  useEffect(() => {
    const fetchData = async () => {
      const response = axios(url, {
        params: {
          api_key: API_KEY,
          q: value,
          limit: start,
        },
      });
      const { data } = (await response).data;
      setGifs(data);
    };

    if (value && !gifs.length) {
      fetchData();
    } else {
      const timeoutID = setTimeout(() => {
        if (value) {
          fetchData();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [value, gifs.length, start]);

  const fetchMoreData = () => {
    if (gifs.length >= 48) {
      setHasMore(false);
      return;
    } else {
      setStart(start + 12);
      setHasMore(true);
    }
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        <div className="gifs">
          {gifs.map((gif, index) => {
            return <Gif key={index} gif={gif} index={index} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Gifs;
