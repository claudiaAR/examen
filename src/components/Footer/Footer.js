import React, {useEffect, useState } from "react";
import sanityClient from "../../client.js";
import styles from "./footer.module.scss";
import imageUrlBuilder from "@sanity/image-url"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Footer() {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "footer"]{
                title,

                iconOne {
                    asset->{
                        _id,
                        url
                    }
                },
                linkOne,
                iconTwo{
                    asset->{
                        _id,
                        url
                    }
                },
                linkTwo,
                iconThree{
                    asset->{
                        _id,
                        url
                    }
                },
            }`,
        )
        .then((data) => setFooterData(data[0]))
        .catch(console.error)
        // run one time
    }, []);

     if (!footerData) return <div>Loading...</div>

    return (
        <div>
            <div className={styles.footerWrapper}>
                <div className={styles.col}>
                <a 
                    href={footerData.link}
                    alt='this'
                    taget="_blank"
                    rel="noopener noreferrer"
                    >
                    <img  
                        src={urlFor(footerData.iconOne).width(30).url()} 
                        alt="social media" 
                    /> 
                    </a>
                  
                </div>

                <h1 className={styles.col}>
                    {footerData.title}
                    {/* <a 
                    href={footerData.link}
                    alt={footerData.title}
                    taget="_blank"
                    rel="noopener noreferrer"
                    >{footerData.title}</a> */}
                </h1>

                 <div className={styles.col}>
                 <a 
                    href={footerData.link}
                    alt='this'
                    taget="_blank"
                    rel="noopener noreferrer"
                    >
                    
                        <img  
                            src={urlFor(footerData.iconTwo).width(28).url()} 
                            alt="social media" 
                        /> 
                    </a>
                </div>
            </div>
        </div>
     
    )
}