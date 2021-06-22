import { Injectable } from "@angular/core";
import { Asset } from "src/app/utils/Asset";
import { Navigation } from "src/app/utils/Navigation";
import { Pattern } from "src/app/utils/Pattern";

@Injectable()
export class UtilService {

  public Asset: typeof Asset = Asset;

  public Navigation: typeof Navigation = Navigation;

  public Pattern: typeof Pattern = Pattern;

  constructor() {
  }
}