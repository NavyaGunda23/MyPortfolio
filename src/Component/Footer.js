
import whatsapp from "../assest/whatsapp.svg"

const Footer = () => {
    return(
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center ">
            <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/navya-gunda-318b5112b/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="//api.whatsapp.com/send?phone=971505401750&text=Hi" className="btn btn-light btn-social mr-2" target="_blank">
                <i className="fab fa-whatsapp"></i>
                   {/* <img src={whatsapp } className="custom-img-width  mr-3"  /> */}
                 </a>
                <a className="btn btn-light btn-social" href="https://github.com/NavyaGunda23" target="_blank"><i className="fab fa-github"></i></a>
            </div>
           
            <p className="m-0">&copy; <a className="text-white font-weight-bold" href="https://navyagunda23.github.io/MyPortfolio/" target="_blank">Navya Gunda</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold">Navya Gunda</a>
            </p>
        </div>
    </div>
    )
}
export default Footer