import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "b21yhxrl",
    dataset: "production",
    useCdn: true,
});

// const SanityClient = require('@sanity/client')
// const client = new SanityClient({
//   projectId: 'your-project-id',
//   dataset: 'your-dataset',
//   useCdn: true
// })