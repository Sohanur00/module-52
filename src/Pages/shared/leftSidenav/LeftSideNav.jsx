import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {

        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))



    }, [])

    return (
        <div>
            <h2 className="mt-6 ml-5 font-bold text-2xl">All Category</h2>


            {
                categories.map(category => 
                <Link
                className="block ml-4 p-4 font-semibold"
                to={`category/${category.id}`}
                key={category.id} >{category.name}
                </Link>)

            }
        </div>
    );
};

export default LeftSideNav;