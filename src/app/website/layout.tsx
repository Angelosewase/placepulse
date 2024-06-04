import WebFooter from "../../components/website/Footer"
import WebNavbar from "../../components/website/Navbar"

const WebLayout = ({children}: {children: React.ReactElement}) =>{
    return(
        <div className="flex flex-col bg-[#F9F6F6]">
            <WebNavbar/>
            {children}
            <WebFooter/>
        </div>
    )
}

export default WebLayout