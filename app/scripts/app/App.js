define(['jquery','app/PixiPOV','app/samples/Clap','app/samples/Hat','app/samples/Kick','app/sound']
, function ( $, PixiPOV, Clap, Hat, Kick, Sound) {
    "use strict";

    var App = {

        data: {},
        sound:{},
        samples:[],
        
        initialize: function() {
            console.log('%c Initialize App ','background:black;color:white;font-size:14px');
            App.loadData(this.createSamples);
        },
        loadData: function(callback) {
            $.ajax({
                dataType: "json",
                url: 'data/test.json',
                success: function(data) {
                    console.log('%c Data loaded ','background:black;color:white;font-size:14px');
                    App.data = data;
                    if(callback)
                        callback();
                }
            });
        },
        createSamples: function() {
            console.log('%c Create samples ','background:black;color:white;font-size:14px');

             for(var i =0,ln = App.data.samples.length;i<ln;i++) {
                    App.createSample(App.data.samples[i].type,{
                        name:App.data.samples[i].type,
                        timeline:App.data.samples[i].timeline
                    });
            }
            console.log('%c Create '+App.samples.length+' samples ','background:black;color:white;font-size:14px');

            App.animate();
            PixiPOV.init();
            // ThreePOV.init();
            // ThreePOV.render();
            App.playSound();

        },
        /*
         * I have to find another way to create dynamically my sample
         */
        createSample:function(type,params) {
            var sample;
            switch (type) {
                case 'Clap' :
                    sample = new Clap(params);
                break;
                case 'Hat' :
                    sample = new Hat(params);
                break;
                case 'Kick' :
                    sample = new Kick(params);
                break;
            }
            App.samples.push(sample);
        },
        playSound:function() {
            App.sound = new Sound();
        },
        animate: function() {
            if(App.sound.isPlaying) {
                for(var i =0,ln = App.samples.length;i<ln;i++) {
                    App.samples[i].launchAnimation(App.sound.getCurrentTime());
                }
            }

            requestAnimationFrame(App.animate);
        }
    }
    return App;

});