import { Pipe } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({name: 'safeHtmlUseCarefully'})
export class SafeHtmlUseCarefullyPipe {
  constructor(private sanitizer:DomSanitizer){}

  transform(value: any, args?: any): any {

    if(value && (value.toString().toLowerCase().includes('<script') || 
        value.toString().toLowerCase().includes('&lt;script') || 
        value.toString().toLowerCase().includes('<form') ||
        value.toString().toLowerCase().includes('&lt;form')
        )){
      throw 'bad data';
    }

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}