import UpdateSection from "./UpdateSection";
const Update=()=>{return(
  <section className="contact_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>Update Details</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <UpdateSection/>
      </div>
      <div className="col-md-6">
        <div className="map_container">
          <div className="map">
            <div
              id="googleMap"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  )}
export default Update;