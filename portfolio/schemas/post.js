export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Keep title short',
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
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short text to improve SEO',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        // {
        //   name: 'caption',
        //   type: 'string',
        //   title: 'Caption',
        //   options: {
        //     isHighlighted: true // <-- make this field easily accessible
        //   }
        // },
        {
          title: 'Alternative Text (A11y)',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        // {
        //   // Editing this field will be hidden behind an "Edit"-button
        //   name: 'attribution',
        //   type: 'string',
        //   title: 'Attribution',
        // }
      ]
      // alt:{
      //   alt: 'string'
      // }
    },
    {
      name: 'secundaryImage',
      title: 'Secundary image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative Text (A11y)',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }

      ]
    },
    {
      name: 'thirdImage',
      title: 'Third image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alternative Text (A11y)',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'learnMore',
      title: 'LearnMore',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
