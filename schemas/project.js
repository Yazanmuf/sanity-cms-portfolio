
export default {

    title: "Project",
    name: "project",
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
            title: "Link",
            name: "link",
            type: "url",
        },
        {
            name: 'project_image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            title: "Technologies",
            name: "technologies",
            type: "array",
            of: [{ type: "string" }]
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
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }

            ]
        }

    ]
}