export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'This will be shown in the middle',
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
        title: 'icon first',
        type: 'image',
        options: {
          hotspot: true,
        }, 
      },
      {
        name: 'linkOne',
        description: 'Link to LinkedIn',
        type: 'url',
      },
      {
        name: 'iconTwo',
        title: 'icon second',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'linkTwo',
        description: 'Link to github',
        type: 'url',
      },
    ],
  }