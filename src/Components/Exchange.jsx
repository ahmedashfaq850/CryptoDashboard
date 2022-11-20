import React from "react";
import { server } from "../index";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchange(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <h1>Crypto Exchanges</h1>
            <div className="gridClass">
              {exchange.map((item) => (
                <a href={item.url} target={'blank'}>
                  <div className="card" key={item.id}>
                    <img src={item.image} alt={item.name} />
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

export default Exchange;
