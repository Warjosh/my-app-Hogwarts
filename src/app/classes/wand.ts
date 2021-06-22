export class Wand {
  /* Example data */
  /* 
    "wand":{
        "wood":"holly",
        "core":"phoenix feather",
        "length":11
    }
  */
    /** Class attribute description. */
    private _wood: string;
    set wood(_wood: string) { this._wood = _wood };
    get wood(): string { return this._wood };
  
    /** Class attribute description. */
    private _core: string;
    set core(_core: string) { this._core = _core };
    get core(): string { return this._core };
  
    /** Class attribute description. */
    private _length: number ;
    set length(_length: number ) { this._length = _length };
    get length(): number  { return this._length };

    constructor (
      _wood?: string,
      _core?: string,
      _length?: number
    ){
      this._wood = _wood? _wood : ''; 
      this._core = _core? _core : ''; 
      this._length = _length? _length : 0; 
    }
}