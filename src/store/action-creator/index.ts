



import * as MainActionCreator from './Main';
import * as MainDayActionCreator from './MainDay';
import * as StatRusActionCreator from './StatRus';
import * as StatCovidActionCreator from './StatCovid';
import * as StatCovid2ActionCreator from './StatCovid2';



// обьеднуємо усі екшени
export default {
  ...MainActionCreator,
  ...MainDayActionCreator,
  ...StatRusActionCreator,
  ...StatCovidActionCreator,
  ...StatCovid2ActionCreator,
  
}