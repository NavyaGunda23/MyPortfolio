import { useEffect ,useState} from "react"
import Resume from "../assest/resume/NavyaGunda_Resume.pdf"

const Header = (props) => {
    console.log("headerPosition",props)
    const [showMenuBar, setShowMenuBar] = useState(false)
    
    const handleMenuClick = () =>{
        setShowMenuBar(!showMenuBar)
    }
    
    return(
        <div >
         <nav class={props.headerPosition ? "fixed-top navbar shadow-sm navbar-expand-lg bg-light p-20" :  "navbar shadow-sm navbar-expand-lg bg-light p-20"}  >

            <a  className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5 text-black"><span className="text-primary ">Navya</span>Gunda</h1>
           
        </a>
        {props.mobileResolution &&  <button type="button" class="navbar-toggler" onClick={() => handleMenuClick()}data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>}
       
        {!props.mobileResolution && < >
            <div className="navbar-nav m-auto py-0 " id="navbarCollapse">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#qualification" className="nav-item nav-link">Quality</a>
                <a href="#skill" className="nav-item nav-link">Skill</a>
                <a href="#service" className="nav-item nav-link">Service</a>
                <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <a href={Resume} target='_blank'  className="btn btn-outline-primary d-none d-lg-block">Download CV</a></>}


            {showMenuBar && <div className="navbar-collapse px-lg-3 collapse show"> <div className="navbar-nav m-auto py-0" id="navbarCollapse">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#qualification" className="nav-item nav-link">Quality</a>
                <a href="#skill" className="nav-item nav-link">Skill</a>
                <a href="#service" className="nav-item nav-link">Service</a>
                <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <a href={Resume} target='_blank'  className="btn btn-outline-primary d-none d-lg-block">Download CV</a></div>}
        
        </nav>
       
   


        </div>
    )
}
export default Header