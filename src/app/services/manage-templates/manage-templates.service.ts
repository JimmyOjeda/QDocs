import { Injectable } from '@angular/core';
import { Template } from 'src/app/model/template/template';

@Injectable({
    providedIn: 'root'
})
export class ManageTemplatesService {

    templates = [
        {
            id : 1,
            name: "Plantilla 1",
            file : "file",
            filename: "",
            fileSource : "enlace"
        },
        {
            id : 2,
            name: "Plantilla 2",
            file : "file",
            filename: "",
            fileSource : "enlace"
        }
    ];

    constructor() { }
    
    readAllTemplates () {
        return this.templates;
    }

    createTemplate (template : Template) {
        this.templates.push(template);
    }

    readTemplate (id: number) {
        return this.templates.find(aTemplate => aTemplate.id === id); 
    }

    updateTemplate (template: Template) {
        let oldTemplate = this.templates.find(aTemplate => aTemplate.id === template.id)!;
        this.templates[this.templates.indexOf(oldTemplate)] = template;
    }

    deleteTemplate (id: number) {
        let template = this.templates.find(template => template.id === id)!;
        this.templates.splice(this.templates.indexOf(template),1);
    }
}
