import features from "./featuresarray";
const FeatureSection = () => {
  return (
    <>
      <section className="feature_section">
        <div className="container">
          <div className="feature_container">
            {features?.map((item, index) => {
              return (
                <div className="box">
                  <div className="img-box">
                   <img height={110} width={100} src={item.image}/>
                  </div>
                  <h5 className="name">{item.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default FeatureSection;
