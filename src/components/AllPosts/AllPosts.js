import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link, useLocation } from "react-router-dom";
import styles from "./allPosts.module.scss";
import { useMousePosition } from "../Animation/useMousePosition"
import Paint from "../Animation/Paint"

// import post from "../../../portfolio/schemas/post.js";



export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState(null);
    const position = useMousePosition();
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post" ]{
                title,
                slug,
                tags,
                // 'internships': *[_type == "post" && 'internship' in tags]{
                //     _id,
                //     title,
                //     slug,
                // },
                mainImage{
                    asset ->{
                        _id,
                        url,
                        alt,
                    }
                }
              }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error)
    }, [])

    return (
        <div className={styles.flex}>
             <Paint className={styles.animation}color="#FFF490"/>
            <div className={styles.landingTitle}>
            {position.x}:{position.y}
                <h1 className={styles.verticalText}>Work</h1>
            </div>
        {/* <div className={styles.animationWrapper}>
            <Paint className={styles.animation}color="#FFF490"/>
        </div> */}
       

        {/* {allPostsData.tags === 'internship' ? */}
            <div className={styles.wrapper}>
                {allPostsData &&
                    allPostsData.map((post, index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <img className={styles.heroImage} 
                                    src={post.mainImage.asset.url} 
                                    caption={post.mainImage.caption} 
                                    alt={post.mainImage.alt}
                                />
                                <h2 className={styles.title}>
                                    {post.title}
                                </h2>
                            </span>
                        </Link>

                    ))}
            </div>
               {/* : allPostsData} */}
        </div>
    )
}