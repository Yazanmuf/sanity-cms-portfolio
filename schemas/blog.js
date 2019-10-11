
export default {

    title: "Blog Post",
    name: "blog-post",
    type: "document",


    fields: [

        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        }
        ,
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],

                    }
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    }
                }




            ]
        }

    ]
}