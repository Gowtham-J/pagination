import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [follower, setFollower] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) return;

    setFollower(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {follower.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
