// export default {
//     type: 'landingPage',
//     name: 'LandingPage',
//     fields: [
//       {
//         type: 'string',
//         name: 'title'
//       },
//       {
//         type: 'array',
//         name: 'items',
//         of: [{ type: 'cta' }]
//       }
//     ]
//   }


export default {
    name: 'footer',
    title: 'footer',
    type: 'document',
  
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        description: 'Path name',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'iconOne',
        title: 'first icon',
        type: 'image',
        options: {
          hotspot: false,
        },
      },
      {
        name: 'iconTwo',
        title: 'second icon',
        type: 'image',
        options: {
          hotspot: false,
        },
      },
      {
        name: 'footerText',
        title: 'footer text',
        type: 'text',
      },
      {
        name: 'iconThree',
        title: 'three icon',
        type: 'image',
        options: {
          hotspot: false,
        },
      },
      {
        name: 'iconFour',
        title: 'four icon',
        type: 'image',
        options: {
          hotspot: false,
        },
      }
    ],
  }