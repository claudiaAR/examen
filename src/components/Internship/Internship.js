import React, { useEffect, useState } from "react";
import sanityClient from '../../client.js'
// // import styles from "../AllPosts./allPosts.module.scss";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom"
import styles from "./internship.module.scss"


export default function Internship() {


const [internshipData, setInternshipData] = useState(null);


// const { slug } = useParams();

useEffect(() => {
    sanityClient
    .fetch(
        `*[_type == "post" ]{
            title,
            slug,
            tags,
            'internships': *[_type == "post" && 'internship' in tags]{
                _id,
                title,
                slug,
            },
            mainImage{
                asset ->{
                    _id,
                    url,
                    alt,
                }
            
          }`
    )
    .then((data) => setInternshipData(data))
    .catch(console.error);
    }, []);

    // let internshipData = () => {
    //     const internship = tags.filter(tags === "internship");
    //     this.setState({tags: 'internship'});
    //     console.log(internship);
    //   }
    

    if (!internshipData) return <div>Loading... What is happening? OMG  😬  😱</div>


    return (
        <div>
               {/* {internshipData.tags === 'internship' ? */}
            <div className={styles.wrapper}>
                
            {internshipData &&
                    internshipData.map((post, index) => (
            <Link to={'/' + internshipData.slug.current} key={internshipData.slug.current}>
                <span >
                    <img className={styles.heroImage} 
                        src={post.mainImage.asset.url} 
                        alt={post.mainImage.alt}
                    />
                    <h2 className={styles.title}>{post.title}</h2>
                </span>
            </Link>
       
       ))}
             </div>
            {/* : internshipData}  */}
        </div>
    )
}

// import React from "react";
// import { useLocation } from "react-router-dom";
// // import styles from "./home.module.scss";
// // import { useMousePosition } from "../Animation/useMousePosition"
// // import post from "../../../portfolio/schemas/post.js";



// export default function Internship() {
//     const location = useLocation()
//     console.log(location)

//     return (
//         <div>
           
//         <h1>Internship</h1>
            
//         </div>
//     )
// }