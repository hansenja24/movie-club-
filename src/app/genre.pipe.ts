import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {

  transform(input: User[], genre) {
    var output: User[] = [];
    var totalCareTaker = 0;
    if(genre == "Action") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Action") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Horror") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Horror") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Sci-Fi") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Sci-Fi") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Romance") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Romance") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Comedy") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Comedy") {
          output.push(input[i]);

        }
      }
      return output;
    } else if (genre == "Thriller") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].genre == "Thriller") {
          output.push(input[i]);

        }
      }
      return output;
    } else {
      return input;
    }
  }

}
