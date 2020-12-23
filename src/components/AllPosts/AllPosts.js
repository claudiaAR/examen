import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import styles from "./allPosts.module.scss";
// import Svg from "../../logo.svg";
// import Bloop from "../../svgImages/yellowIllustrator.svg";

export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset ->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error)
    }, [])
    return (
        <div className={styles.flex}>
            <div className={styles.landingTitle}>
                <h1>Claudia Porfolio</h1>
                <h3>Welcone to my blog</h3>
            </div>
            {/* <Bloop /> */}
            <div className={styles.wrapper}>
                {allPostsData &&
                    allPostsData.map((post, index) => (
                        <Link to={'/' + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <img className={styles.heroImage} src={post.mainImage.asset.url} alt="visuall representation of the blog"/>
                                {/* <span> */}
                                    <h2 className={styles.title}>{post.title}</h2>
                                {/* </span> */}
                            </span>
                        </Link>

                    ))}
               
            </div>
        </div>
    )
}