import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'trunks',
    power: 2222
  }];



  onNewCharacter(character: Character):void{
    character.id = uuid();
    console.log('nuevo caracter: ',character);
    this.characters.push(character);
  }

  onDeleteCharacter(id: string):void{

    const index = this.characters.findIndex((element) => element.id === id);
    console.log(`se elimina el id ${id} tiene indice ${index}`);
    this.characters.splice(index, 1);
  }

}
