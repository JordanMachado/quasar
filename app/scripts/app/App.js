define([
            'jquery',
            'app/PixiPOV',
            'app/Intro',
            'app/sound',
            'app/samples/Perc1',
            'app/samples/Perc2',
            'app/samples/Perc3',
            'app/samples/Perc4',
            'app/samples/Perc5',
            'app/samples/Perc6',
            'app/samples/Perc7',
            'app/samples/Synth1',
            'app/samples/Synth2',
            'app/samples/Synth3',
            'app/samples/Synth4',
            'app/samples/Synth5',
            'app/samples/Kick',
        ]
, function ( $, PixiPOV, Sound, Perc1, Perc2, Perc3, Perc4, Perc5 , Perc6, Perc7, Synth1, Synth2, Synth3, Synth4, Synth5, Kick) {
    "use strict";

    var App = {

        data: {},
        sound:{},
        samples:[],
        
        initialize: function() {
            console.log('%c Initialize App ','background:black;color:white;font-size:14px');
            App.loadData(this.createSamples);
            window.addEventListener('resize',function() {
                App.resize();
            }, false);
        },
        loadData: function(callback) {
            $.ajax({
                dataType: "json",
                url: 'data/data.json',
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
                        name:App.data.samples[i].name,
                        timeline:App.data.samples[i].timeline
                    });
            }
            console.log('%c Create '+App.samples.length+' samples ','background:black;color:white;font-size:14px');

            App.animate();
            PixiPOV.init();
            App.playSound();
            PixiPOV.hideAllChildrenInContainer();

        },
        createSample:function(type,params) {
            var sample;
            switch (type) {
                case 'perc1_01' :
                    sample = new Perc1(params);
                break;
                case 'perc2_01' :
                    sample = new Perc2(params);
                break;
                case 'perc3_01' :
                    sample = new Perc3(params);
                break;
                case 'perc4_01' :
                    sample = new Perc4(params);
                break;
                case 'perc5_01' :
                    sample = new Perc5(params);
                break;
                case 'perc6_01' :
                    sample = new Perc6(params);
                break;
                // case 'perc7_01' :
                //     sample = new Perc7(params);
                // break;
                case 'Synth1_01' :
                    sample = new Synth1(params);
                break;
                case 'Synth3_01' :
                    sample = new Synth3(params);
                break;
                case 'Synth2_01' :
                    sample = new Synth2(params);
                break;
                case 'Synth4_01' :
                    sample = new Synth4(params);
                break;
                case 'Synth5_01' :
                    sample = new Synth5(params);
                break;
                case 'kick_01' :
                    sample = new Kick(params);
                break;
                default :
                    return;
                break;
            }
            App.samples.push(sample);
        },
        playSound:function() {
            App.sound = new Sound();
        },
        animate: function() {
            if(App.sound.isPlaying) {
                
                //if(Intro.canStart) {
                    for(var i =0,ln = App.samples.length;i<ln;i++) {
                        App.samples[i].launchAnimation(App.sound.getCurrentTime());
                    }
               // } else {
                        //App.sound.loopIntro();
                //}
               
            }

            requestAnimationFrame(App.animate);
        },
        resize:function() {
            PixiPOV.resize(window.innerWidth,window.innerHeight);
        }
    }
    return App;

});