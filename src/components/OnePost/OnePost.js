import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import sanityClient from '../../client.js'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import styles from "./onePost.module.scss";
import Paint from "../Animation/Paint"
import PageNotFound from "../404/PageNotFound"


// const serializers = {
//     marks: {
//       link: ({props}) => (
//         <pre>
//             {JSON.stringify(props, null, 2)}
//         </pre>
//       )
//     }
// }
// console.log('*****This is the content in*****', serializers)
// const serializers = {
//     types: {
//       image: ({ node: { asset, alt } }) => <img src={urlFor(asset).url()} alt={alt} className="red" />,
//     },
//   }


const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
    return builder.image(source);
}

export default function OnePost() {
    const [postData, setPostData] = useState(null);
    //react hook useParams
    const { slug } = useParams();

    // GROQ query 
    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    hotspot,
                    alt
                },
                secundaryImage{
                    asset->{
                        _id,
                        url,
                    },
                    alt,
                    hotspot,
                },
                thirdImage{
                    asset->{
                        _id,
                        url,
                    },
                    alt,
                    hotspot,
                },
                excerpt,
                body, 
                learnMore,
                "name":category->title, 
                "name": author->name,
                "authorImage": author->image
            }`,
            { slug }
        )
        // .then((data) => setPostData(data[0]))
        .then((data) => console.log(data) || setPostData(data[0]))
        .catch(console.error);
    }, [slug]);
   
    if (!postData) return <div> You see me Loading...</div>


    // const [inHover, setHover] = useState(false);

    return(
        <div className={styles.onePostWrapper}>
             <Paint className={styles.animation} color="#fff5ee"/>
            <div className={styles.titelWrapper}>
                <h1 className={styles.verticalText}>{postData.title}</h1>
                    {/* <div> 
                        <img src={urlFor(postData.authorImage).width(100).url()}
                        alt="Claudia is the author of the blog"
                        /> 
                    <h1 className={styles.verticalText}>{postData.name}</h1> 
                    </div>  */}
            </div>
         
        

            <div className={styles.flexImages}>
            <span className={styles.spanSvg}> 
                <svg width="253" height="34" viewBox="0 0 253 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 30.5001C3.5 30.5001 9 3.50016 27.5 3.50006C46 3.49997 53.5 30.5001 53.5 30.5001C53.5 30.5001 62 3.50006 80.5 3.50006C99 3.50006 104.5 30.5001 104.5 30.5001C104.5 30.5001 108.179 3.50008 128 3.50006C147.821 3.50005 153 30.5001 153 30.5001C153 30.5001 163.5 3.50006 180.5 3.50006C197.5 3.50006 202 30.5001 202 30.5001C202 30.5001 210 3.50006 228.5 3.50006C247 3.50006 249.5 30.5001 249.5 30.5001" 
                        stroke="black" 
                        strokeWidth="6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </span>

            
                <div className={styles.imageRatio}>
                    <img 
                        className={styles.ratioContent} 
                        src={urlFor(postData.mainImage).width(800).height(494).url()} 
                        alt={postData.mainImage.alt} 
                    />
                </div>

                <div className={styles.imageRatio}>
                    <img 
                        className={styles.ratioContent} 
                        src={urlFor(postData.secundaryImage).width(400).url()} 
                        alt={postData.secundaryImage.alt} 
                    />
                   
                </div>
                <div className={styles.imageRatio}>
                    <img 
                        className={styles.ratioContent} 
                        src={urlFor(postData.thirdImage).width(400).height(247).url()} 
                        alt={postData.thirdImage.alt} 
                    /> 
                </div>
                
            </div>

          
            <div className={styles.storyTwo}>
                <div className={styles.text}>
                {/* <div className={styles.imageRatio}> */}
                    <BlockContent
                        // serializers={serializers}
                        blocks={postData.body}
                        imageOptions={{w: 400, fit: 'max', dpr:1}}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                        alt={postData.alt} 
                    />
                {/* </div> */}
                </div>
            </div>

            <div className={styles.storyTest}>
                <div className={styles.text}>
                    <BlockContent
                        // serializers={serializers}
                        className={styles.test}
                        blocks={postData.learnMore}
                        imageOptions={{w: 400, fit: 'max', dpr:1}}
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}
                        alt={postData.alt} 
                    />
                </div>
            
            </div>
        </div>
    )
}