import React from "react";
import { server } from "../index";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      setCoin(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  console.log(coin);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="DetailsCOntainer">
            <div className="LastUpdate">
              Last Update On {Date(`${coin.last_updated}`).split("G")[0]}
            </div>
            <div className="AllData">
              <div className="img">
                <img src={coin.image.large} alt={coin.name} />
              </div>
                <h2>{coin.name}</h2>
                <h3 className="price">{`$ ${coin.market_data.current_price.usd}`}</h3>
                {coin.market_data.price_change_percentage_24h > 0 ? (
                  <div className="green">
                    <span>
                      <GoArrowSmallUp style={{
                        color: "#4BB543",
                        fontSize: "30px",
                        marginLeft: "-10px",
                      }}/>
                    </span>
                    <h2>{coin.market_data.price_change_percentage_24h}%</h2>
                  </div>
                ) : (
                  <div className="red">
                    <span>
                      <GoArrowSmallDown style={{
                        color: "#F32013",
                        fontSize: "30px",
                        marginLeft: "-10px",
                      }}/>
                    </span>
                    {coin.market_data.price_change_percentage_24h}%
                  </div>
                )}
                <div className="rank">#{coin.market_cap_rank}</div>
                <div className="progressbar">
                  <div className="progress">  </div>
                </div>
                <div className="flexContainer">
                  <div className="flexItem danger">
                    ${coin.market_data.low_24h.usd}
                  </div>
                  <div className="flexItem">24H Range</div>
                  <div className="flexItem success">
                    ${coin.market_data.high_24h.usd}
                  </div>
                </div>
                <div className="container2">
                  <div className="flexItemcon">
                    <h3>MAX SUPPLY</h3>
                    <h3>{coin.market_data.max_supply}</h3>
                  </div>
                  <div className="flexItemcon">
                    <h3>Circulating Supply</h3>
                    <h3>{coin.market_data.circulating_supply}</h3>
                  </div>
                  <div className="flexItemcon">
                    <h3>MARKET CAP</h3>
                    <h3>{coin.market_data.market_cap_change_24h}</h3>
                  </div>
                  <div className="flexItemcon">
                    <h3>All TIME LOW</h3>
                    <h3>{coin.market_data.atl.usd}</h3>
                  </div>
                  <div className="flexItemcon">
                    <h3>ALL TIME HIGH</h3>
                    <h3>{coin.market_data.ath.usd}</h3>
                  </div>
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinDetails;
