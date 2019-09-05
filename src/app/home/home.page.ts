import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    tocando: boolean = false;

    options = {
        initFullscreen: false, // true is default. iOS only.
        keepAwake: false, // prevents device from sleeping. true is default. Android only.
        successCallback: function () {
            console.log("Player closed without error.");
        },
        errorCallback: function (errMsg) {
            console.log("Error! " + errMsg);
            this.tocando = false;
        }
    };
    audioUrl = 'http://us4.internet-radio.com:8266/listen.pls&t=.m3u';
    ///audioUrl = 'https://stream.asaweb.com.br:8032/stream';

    constructor(public platform: Platform) {
        window['plugins'].streamingMedia.playAudio(this.audioUrl);
    }

    ligarSom() {
        this.tocando = true;
        window['plugins'].streamingMedia.playAudio(this.audioUrl, this.options);
    }

    pararSom() {
        this.tocando = false;
        window['plugins'].streamingMedia.stopAudio();
    }

    // Play an audio file (not recommended, since the screen will be plain black)


    // Play an audio file with options (all options optional)
    /*var options = {
      bgColor: "#FFFFFF",
      bgImage: "<SWEET_BACKGROUND_IMAGE>",
      bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
      initFullscreen: false, // true is default. iOS only.
      keepAwake: false, // prevents device from sleeping. true is default. Android only.
      successCallback: function() {
        console.log("Player closed without error.");
      },
      errorCallback: function(errMsg) {
        console.log("Error! " + errMsg);
      }
    };
    window.plugins.streamingMedia.playAudio(audioUrl, options);
  
    // Stop current audio
    window.plugins.streamingMedia.stopAudio();
  
    // Pause current audio (iOS only)
    window.plugins.streamingMedia.pauseAudio();
  
    // Resume current audio (iOS only)
    window.plugins.streamingMedia.resumeAudio(); */


}