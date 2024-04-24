import profileImage from "../assest/profile.JPG"
import metavoeux from "../assest/metavoeux.png"
import bttv from "../assest/bttv.png"
import fabric from "../assest/fabric.png"
import admin from "../assest/admin.png"
import message from "../assest/message.png"
import channel from "../assest/onechannel.png"



const Portfolio = () => {
    return(
        <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:" 1px #dee2e6"}}>Gallery</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
            </div>
            <div className="row">
                {/* <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
                    </ul>
                </div> */}
            </div>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={metavoeux} alt="" />
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://metavoeux.io/" target="_blank" data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                               visit website
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={bttv} alt="" />
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://www.bt.com/tv" target="_blank" data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                               visit website
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={fabric} alt="" />
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://www.temenos.com/products/quantum/fabric/" target="_blank" data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                               visit Documentation
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={admin} alt="" />
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://basecamp.temenos.com/s/article-detail/a046A00000DkKGUQA3/kony-admin-console-412-setup" target="_blank" data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                            visit Documentation
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={message} alt="" />
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://docs.kony.com/konylibrary/messaging/kms_console_user_guide/Content/Introduction_1.htm" target="_blank"  data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                            visit Documentation
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid customwidth rounded w-100" src={channel} alt=""/>
                        <div className="portfolio-btn bg-overlay d-flex align-items-center justify-content-center">
                            <a href="https://www.onechanneladmin.com/" target="_blank"  data-lightbox="portfolio" style={{color:"white"}} className="button-visit">
                               visit website
                                {/* <i className="fa fa-plus text-white" style={{fontSize:"60px"}}></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Portfolio