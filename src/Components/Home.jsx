import React from "react";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Link } from "react-router-dom";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exchange, setExchange] = useState([]);
  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=usd&page=1`
      );
      setCoins(data);
      const data2  = await axios.get(`${server}/exchanges`);
      setExchange(data2.data);
    };
    fetchData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="HomeContainer">
            <h1>Explore Crypto Market</h1>
            <input className="search" type="search" placeholder="Search" />
            <h1 className="subheading">Crypto Coins</h1>
            <div><Link to='/coins'><button className="seeButton">See More</button></Link></div>
            <div className="gridClass">
              {coins.slice(0, 6).map((item) => (
                <Link to={`/coin/${item.id}`}>
                  <div className="card" key={item.id}>
                    <img className="coinImg" src={item.image} alt={item.name} />
                    <h3>{item.symbol}</h3>
                    <h3>{item.name}</h3>
                    <h3>{`$ ${item.current_price}`}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <h1 className="subheading">Crypto Exchanges</h1>
            <div><Link to='/Exchange'><button className="seeButton">See More</button></Link></div>
            <div className="gridClass">
              {exchange.slice(0, 7).map((item) => (
                <a href={item.url} target={'blank'}>
                  <div className="card" key={item.id}>
                    <img className="coinImg" src={item.image} alt={item.name} />
                    <h3>{item.trust_score_rank}</h3>
                    <h3>{item.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
