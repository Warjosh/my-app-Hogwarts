export class Pattern {

    public static NUMBERS: RegExp = /^\d+$/;

    public static PHOTO_URL: RegExp = /^(https?:\/\/.*\.(?:png|jpg))/;
    
    public static NAMES: RegExp = /[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

}