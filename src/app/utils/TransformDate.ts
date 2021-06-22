export class TransformDate {

    constructor() {
    }
  
    /**
     * 
     * @param _date 
     * @returns 
     */
    public static transformDateToString(_date: Date): string {
      const _day: string = (_date.getDate() < 10 ? `0${_date.getDate()}` : _date.getDate().toString());
      const _month = ((_date.getMonth() + 1) < 10 ? `0${_date.getMonth() + 1}` : (_date.getMonth() + 1).toString());
      const _year = _date.getFullYear().toString();
  
      return `${_day}/${_month}/${_year}`;
    }
  
    /**
     * 
     * @param _string 
     * @param _spliter 
     * @returns 
     */
    public static transformStringToDate(_string: string, _splitter: string): Date {
      let _values: string[] = _string.split(_splitter);
      _values[2] = _values[2].split('T')[0];
      let _date = new Date(parseInt(_values[0]), parseInt(_values[1]) - 1, parseInt(_values[2]));
      return _date;
    }
  
  }
  