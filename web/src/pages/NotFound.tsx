import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
interface NotFoundProps {

}

function NotFound({}: NotFoundProps) {
        return (
          <div>
            <Navbar />
            <div className="mt-44 h-[100vh]">
              Sorry, this page is under construction.
              <p>
                Please go to the <Link to="/">Homepage</Link>.
              </p>
            </div>
          </div>
        );
}

export default NotFound;