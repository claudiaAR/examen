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
        {
          title: 'Alternative Text (A11y)',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ]
      // alt:{
      //   alt: 'string'
      // }
    },
    {
      name: 'secundaryImage',
      title: 'Secondary image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text (A11y)',
          type: 'string',
          options: {
            isHighlighted: true
          }
        },
        {
          title: 'remove image', 
          name: 'hide',
          type: 'boolean' , 
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
          },
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
      name: 'bodyTwo',
      title: 'New rich text',
      type: 'richText'
    },
    {
      name: 'body',
      description: 'Use h3 to make text apper vertically beside the first sections 3 images',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'learnMore',
      title: 'LearnMore',
      type: 'blockContent',
    },
    {
      name: 'tags',
      type: 'array',
      description: 'add relevent taggs for improve SEO',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
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
