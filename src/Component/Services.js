


const Services = () => {
    return (
        <div className="container-fluid pt-5" id="service">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:" 1px #dee2e6"}}>Service</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Responsive Application</h4>
                    </div>
                    <p>Responsive Application as a Service in web applications provides a seamless and user-friendly experience across devices, making it easier for users to access and interact with the application from anywhere, at any time.</p>
                    {/* <a className="border-bottom border-primary text-decoration-none" href="">Read More</a> */}
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Front End Development</h4>
                    </div>
                    <p>

                    Front-end Development as a Service in web applications is a service model where the design, development, and implementation of user interface components are outsourced to a third-party provider. This includes elements like layout, navigation, forms, and interactive elements.

</p>
                    {/* <a className="border-bottom border-primary text-decoration-none" href="">Read More</a> */}
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Back End Development</h4>
                    </div>
                    <p>
Back-end development with NestJS and MongoDB creates the server-side logic and data storage for web applications. NestJS, a Node.js framework, offers features for scalable server-side applications. MongoDB, a NoSQL database, provides flexible and scalable data management, ideal for modern web apps.</p>
                    {/* <a className="border-bottom border-primary text-decoration-none" href="">Read More</a> */}
                </div>
            </div>
        </div>
    </div>
    )
}
export default Services