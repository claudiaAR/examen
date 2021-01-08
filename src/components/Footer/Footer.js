import React from "react";
import sanityClient from "../../client.js";
// import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
// import { useMousePosition } from "../Animation/useMousePosition"
// import Paint from "../Animation/Paint"
// import imageUrlBuilder from "@sanity/image-url"
// import BlockContent from "@sanity/block-content-to-react"
// import { useParams } from "react-router-dom"



// import Svg from "../../logo.svg";
// import Bloop from "../../svgImages/yellowIllustrator.svg";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

export default function Footer() {
    // const [postData, setPostData] = useState(null);
    // //react hook useParams
    // const { slug } = useParams();

    // // GROQ query 
    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*[slug.current == $slug]{
    //             title,
    //             slug,
    //             mainImage{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //         }`,
    //         { slug }
    //     )
    //     .then((data) => setPostData(data[0]))
    //     .catch(console.error);
    // }, [slug]);

    // if (!postData) return <div>Loading...</div>

    return (
        <div className={styles.flex}>
            <div className={styles.landingTitle}>
                <h1 className="verticalText">Footer</h1>
                
                <h3>This is my footer</h3>
               
               
                <div>
             
            </div>
            </div>
        </div>
    )
}