import * as moment from 'moment';

export class FeaturedCity {
  name: string;
  image: string;
  temperature: string;
  date: string;
  time: string;
  generalWeather: string;

  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.date = moment().format('dddd, DD MMMM YYYY');
  }
}
