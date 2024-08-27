/*
  Might remove the blog entirely or add something different later
  Ideas: Why Choose Us Section?
         Customer Opinions Sections?
*/

import "./blog.css";

export default function blog() {
  return (
    <>
      <section className="section blog" id="blog">
        <div className="blog__container container">
          <div className="title">
            <h1 className="primary__title">Latest News</h1>
          </div>
          <div className="blog__center">
            <div className="blog__box">
              <div className="img__cover">
                <img src="" alt="" />
              </div>
              <div className="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="blog__box">
              <div className="img__cover">
                <img src="" alt="" />
              </div>
              <div className="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="blog__box">
              <div className="img__cover">
                <img src="" alt="" />
              </div>
              <div className="box__content">
                <h2>Here are the trends I see coming this fall</h2>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
