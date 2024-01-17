import clinets from "./clientsArray";
const ClientSection = () => {
  return (
    <>
      {" "}
      <section className="client_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="carousel-wrap layout_padding2-top ">
            <div className="owl-carousel">
              <div className="item">
                {clinets?.map((item,index) => {
                  return (
                    <div className="box">
                      <div className="client_id">
                        <div className="img-box">
                          <img src="images/client-1.jpg" alt="" />
                        </div>
                        <div className="client_detail">
                          <div className="client_info">
                            <h6>{item.title}</h6>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <i
                            className="fa fa-quote-left"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <div className="client_text">
                        <p>{item.abouttittle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ClientSection;
