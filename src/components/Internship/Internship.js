import React, { useEffect, useState } from "react";
import sanityClient from '../../client.js'
// import React from "react";
// // import styles from "../AllPosts./allPosts.module.scss";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom"
import styles from "./internship.module.scss"


export default function Internship() {

const [internshipData, setInternshipData] = useState(null);

// const { slug } = useParams();

useEffect(() => {
    sanityClient.fetch(
        ` *[_type == "post" ] {
            tags,
            'internship' : *[_type == 'internship']{
                title,
                slug,
                mainImage{
                    asset ->{
                        _id,
                        url,
                        alt,
                    }
                }
            }`,
    )
    .then((data) => setInternshipData(data))
    .catch(console.error);
    }, []);

    // let internshipProject = () => {
    //     const internship = tags.filter( post => tags === "internship");
    //     this.setState({tags: internship});
    //     console.log(internship);
    //   }

    if (!internshipData) return <div>Loading... What is happening? OMG  😬  😱</div>


    return (
        <div>
            <div className={styles.wrapper}>
            {internshipData &&
                internshipData.map((internshipData, index) => (
                <span key={index}>
                    <img className={styles.heroImage} 
                        src={internshipData.mainImage.asset.url} 
                        alt={internshipData.mainImage.alt}
                    />
                    <h2 className={styles.title}>{internshipData.title}</h2>
                </span>
             ))}
             </div>
        </div>
    )
}