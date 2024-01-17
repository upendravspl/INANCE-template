import Services from "./servicesArray";
import Contents from "./servicesArray";
export const Service = () => {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2> Our Services </h2>
          </div>
          <div className="row">
            {Services?.map((item, index) => {
              return (
                <div className="col-sm-6 col-md-4 mx-auto">
                  <div className="box ">
                    <div className="img-box">
                      <img src="images/s1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{item.title}</h5>
                      <p>{item.abouttittle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-box">
            <a href="">View More</a>
          </div>
        </div>
      </section>
    </>
  );
};
