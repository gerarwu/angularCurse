import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'body-component',
    templateUrl: 'body.component.html'

})
export class BodyComponent{

    mostrar : boolean = true;
    mensaje : string = "Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber."
    author : string = "Albert Einstein";

    personas : string [] = ["Alan Turring", "Dennis Ritchie", "Ken Thompson", "Linus Torvalds"];

}