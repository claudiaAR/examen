import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import sanityClient from '../../client.js'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import styles from "./onePost.module.scss";
import Paint from "../Animation/Paint"


// const builder = imageUrlBuilder(sanityClient);
// // function urlFor(source) {
//     return builder.image(source);
// }

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
                    }
                },
                secundaryImage{
                    asset->{
                        _id,
                        url
                    }
                },
                thirdImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body, learnMore,
                "name": author->name,
                "authorImage": author->image
            }`,
            { slug }
        )
        .then((data) => setPostData(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!postData) return <div>Loading...</div>

    // const [inHover, setHover] = useState(false);

    return(
        <div>
             <Paint className={styles.animation}color="#73D082"/>
            <div className={styles.titelWrapper}>

            <h1 className={styles.verticalText}>{postData.title}</h1>
                <div>
                    {/* <img src={urlFor(postData.authorImage).width(100).url()}
                    alt="Claudia is the author of the blog"
                    /> */}
                     {/* <h1 className={styles.verticalText}>{postData.name}</h1> */}
                </div> 
            </div>

            <div className={styles.story}>
                {/* <img className={styles.heroImage} 
                    src={urlFor(postData.mainImage).width(600).url()} 
                    alt={postData.alt} 
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                />
                 */}
                <div className={styles.text}>
                    <BlockContent
                    blocks={postData.body}
                    imageOptions={{w: 500, fit: 'max'}}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                    />
                </div>
            </div>

            <div className={styles.storyTwo}>
                {/* <img className={styles.heroImage} src={urlFor(postData.secundaryImage).width(200).url()} alt="main representation of post" />
                <img className={styles.heroImage} src={urlFor(postData.thirdImage).width(200).url()} alt="main representation of post" /> */}
            
            
                <div className={styles.text}>
                    <BlockContent
                    // className={styles.test}
                    blocks={postData.learnMore}
                    imageOptions={{w: 500, fit: 'max'}}
                    projectId={sanityClient.clientConfig.projectId}
                    dataset={sanityClient.clientConfig.dataset}
                    />
                </div>
            </div>
        </div>
    )
}