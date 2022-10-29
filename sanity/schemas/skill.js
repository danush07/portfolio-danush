export default {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Title of the skill",
            type: "string",
        },
        {
            name: "progress",
            title: "Progress",
            type: "string",
            description: "progress of the skill"

        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true,

            }
        }
        ]
}