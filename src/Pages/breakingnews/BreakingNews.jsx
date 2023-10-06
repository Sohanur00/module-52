import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-green-200">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
              <Link to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
              <Link to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
              <Link to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
              <Link to='/'>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>

            </Marquee>
        </div>
    );
};

export default BreakingNews;