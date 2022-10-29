interface SanityBody{
    _createAt: string;
    _updateAt: string;
    _id: string;
    _rev: string;
   
}
export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linktoBuild: string;
    summary: string;
    
   
}
export interface Skill extends SanityBody {
    title: string;
    _type: "skill";
    progress: string;
    image: Image;
}