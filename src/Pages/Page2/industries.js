import React from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./industries.css"
import pic01 from "../../Assets/finance.jpg";
import pic02 from "../../Assets/insurance.jpg";
import pic03 from "../../Assets/law.jpg";
import pic04 from "../../Assets/manufacturing.jpg";
import pic05 from "../../Assets/shipping.jpg"
import pic06 from "../../Assets/tech.jpg" ;


const Industries = () => {
  return (
    <div className="">
      <Header/>
      <div className="ContainerJ">
        <div class="rowzr">
          <div class="col-md-6">
            <h1 class="subpage-title">
              Industries for Business Phone Services
            </h1>
            <h4>
              Emparex business phone service caters to the industry-specific needs of our business customers by incorporating the future-proof
              features required to gain and maintain your competitive advantage.
            </h4>
          </div>
        </div>
      </div>
      <div class="industries-list">
                {/* <div class="rowz">
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-realestate.html" class="btn-move"><img className="pic00" src="" alt="real estate"/></a>
                        <a href="industry-realestate.html" class="btn-move">Real Estate <span>⟶</span></a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-medical.html" class="btn-move"><img className="pic00" src="img className="pic00"/img className="pic00"_ind_medicine.jpg" alt="medicine"/></a>
                        <a href="industry-medical.html" class="btn-move">Medicine <span>⟶</span></a>
                    </div>

                </div> */}
                <div class="rowz">
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-logistics.html" class="btn-move"><img className="pic00" src={pic05} alt="shipping"/></a>
                        <a href="industry-logistics.html" class="btn-move">Shipping/Logistics <span className="arrow">⟶</span></a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-tech.html" class="btn-move"><img className="pic00" src={pic06} alt="information technology"/></a>
                        <a href="industry-tech.html" class="btn-move">Information Technology <span className="arrow">⟶</span></a>
                    </div>

                </div>
                <div class="rowz">

                    <div class="col-sm-6 col-md-4">
                        <a href="industry-finance.html" class="btn-move"><img className="pic00" src={pic01} alt="finance"/></a>
                        <a href="industry-finance.html" class="btn-move">Finance &amp; Accounting <span className="arrow">⟶</span></a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-law.html" class="btn-move"><img className="pic00" src={pic03} alt="law"/></a>
                        <a href="industry-law.html" class="btn-move">Law &amp; Paralegal <span className="arrow">⟶</span></a>
                    </div>
                </div>

                <div class="rowz">

                    <div class="col-sm-6 col-md-4">
                        <a href="industry-manufacturing.html" class="btn-move"><img className="pic00" src={pic02} alt="manufacturing"/></a>
                        <a href="industry-manufacturing.html" class="btn-move">Manufacturing <span className="arrow">⟶</span></a>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <a href="industry-insurance.html" class="btn-move"><img className="pic00" src={pic04} alt="insurance"/></a>
                        <a href="industry-insurance.html" class="btn-move">Insurance <span className="arrow">⟶</span></a>
                    </div>

                </div>
            </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Industries;
