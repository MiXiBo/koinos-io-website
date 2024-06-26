import BrandSlider1 from "../slider/BrandSlider1";
export default function Exchanges() {
  const title = "Partnerships";

  return (
    <>
      <div id="brands-1" className="pt-100 pb-40 brands-section">
        <div className="container">
          {/* BRANDS TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="brands-title mb-50">
                <h5 className="s-20">{title}</h5>
              </div>
            </div>
          </div>
          {/* BRANDS CAROUSEL */}
          <div className="row">
            <div className="col text-center">
              <BrandSlider1 />
              <section className="hr_rule" />
            </div>
          </div>{" "}
          {/* END BRANDS CAROUSEL */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
