import React from "react";
// import sanityClient from "../../client.js";
// import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
// import { HomeIcon } from '@material-ui/icons';
// import { useMousePosition } from "../Animation/useMousePosition"
// import Paint from "../Animation/Paint"
// import imageUrlBuilder from "@sanity/image-url"
// import BlockContent from "@sanity/block-content-to-react"
// import { useParams } from "react-router-dom"

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//     return builder.image(source);
// }

export default function Footer() {
    // const [footerData, setFooterData] = useState(null);
    // // //react hook useParams
    // const { slug } = useParams();

    // // GROQ query 
    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*[slug.current == $slug]{
    //             title,
    //             slug,
    //             iconOne{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //             iconTwo{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //             iconTwo{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //             footerText,
    //             iconThree{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //             iconFour{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             },
    //         }`,
    //         { slug }
    //     )
    //     .then((data) => setFooterData(data[0]))
    //     .catch(console.error);
    // }, [slug]);

    // if (!footerData) return <div>Loading...</div>

    return (
        <div className={styles.flex}>
            <div className={styles.landingTitle}>
                <h1 className="verticalText">Footer</h1>
                <h3>This is my footer</h3>
            </div>
        </div>
    )
}

// import React, { useEffect, useState } from "react";
// import sanityClient from "../../client.js";
// // import { Link } from "react-router-dom";
// import styles from "./footer.module.scss";
// // import { useMousePosition } from "../Animation/useMousePosition"
// // import Paint from "../Animation/Paint"
// // import imageUrlBuilder from "@sanity/image-url"
// import BlockContent from "@sanity/block-content-to-react"
// import { useParams } from "react-router-dom"



// // import Svg from "../../logo.svg";
// // import Bloop from "../../svgImages/yellowIllustrator.svg";

// // const builder = imageUrlBuilder(sanityClient);
// // function urlFor(source) {
// //     return builder.image(source);
// // }

// export default function Footer() {
//     const [postData, setPostData] = useState(null);

//     const { slug } = useParams();

//     // GROQ query 
//     useEffect(() => {
//         sanityClient.fetch(
//             `*[slug.current == $slug]{
//                 title,
//                 slug,
//                 learnMore,
//             }`,
//             { slug }
//         )
//         .then((data) => setPostData(data[0]))
//         .catch(console.error);
//     }, [slug]);

//     if (!postData) return <div>Loading...</div>

//     return (
//         <div className={styles.flex}>
//             {/* <div className={styles.landingTitle}>
//                 <h1 className="verticalText">Footer</h1>

//                 <h3>This is my footer</h3>

//                 <div>

//                 </div>
//             </div> */}

//             <div className="flex">
//                 <BlockContent
//                 blocks={postData.learnMore}
//                 imageOptions={{w: 120, h: 140, fit: 'max'}}
//                 projectId={sanityClient.clientConfig.projectId}
//                 dataset={sanityClient.clientConfig.dataset}
//                 />
//             </div>
//         </div>
//     )
// }