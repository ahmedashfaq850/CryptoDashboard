import React from "react";
import { server } from "../index";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageArr = new Array(4).fill(1)


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=usd&page=${page}`);
      setCoins(data);
      setLoading(false);
    };
    fetchData();
  }, [page]);
 
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <h1>Crypto Coins</h1>
            <div className="gridClass">
              {coins.map((item) => (
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
            <div className="pagination">
              {
                pageArr.map((item, index)=>(
                  <button key={index} className="paginationButton" onClick={()=>setPage(index+1)}>{index+1}</button>
                ))
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
