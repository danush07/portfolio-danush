import { title } from "process";

export default {
    name: "project",
    title: "Project",
    type:"document",
    fields: [
        {
        name: "title",
        title: "title",
        description: "Title of the Project",
        type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true,
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
           
            },
           {
            name: "linktoBuild",
            title: "linktoBuild",
            type: "url",
           },
        
    ],
}