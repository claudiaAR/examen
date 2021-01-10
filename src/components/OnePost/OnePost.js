import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import sanityClient from '../../client.js'
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import styles from "./onePost.module.scss";


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
            <div>
                <h2>{postData.title}</h2>
                <div>
                    <img src={urlFor(postData.authorImage).width(100).url()}
                    alt="Claudia is the author of the blog"
                    />
                    <h4>{postData.name}</h4>
                </div>
            </div>
            <img src={urlFor(postData.mainImage).width(200).url()} alt="main representation of post" />
            <img src={urlFor(postData.secundaryImage).width(200).url()} alt="main representation of post" />
            <img src={urlFor(postData.thirdImage).width(200).url()} alt="main representation of post" />
            <div className={styles.flex}>
                <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                imageOptions={{w: 120, h: 140, fit: 'max'}}
                dataset={sanityClient.clientConfig.dataset}
                />
            </div>
            <div className="flex">
                <BlockContent
                blocks={postData.learnMore}
                imageOptions={{w: 120, h: 140, fit: 'max'}}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
                />
            </div>
        </div>
    )
}