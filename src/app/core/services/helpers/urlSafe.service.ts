import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UrlSafeService {

  constructor(private sanitizer:DomSanitizer) { }
  /**
   * 
   * @param string url 
   * @returns URL
   */

  geturl(url: String): SafeUrl {
    let safeUrl: SafeUrl = '';
    if (url != undefined) {
      const myUrl = url.valueOf();
      safeUrl = this.sanitizer.bypassSecurityTrustUrl(myUrl);
    }
    return safeUrl;
  }
}
