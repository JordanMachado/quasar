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
    'app/samples/Synth1',
    'app/samples/Synth2',
    'app/samples/Synth3',
    'app/samples/Synth4',
    'app/samples/Synth5',
    'app/samples/Kick',
], function($, PixiPOV, Intro, Sound, Perc1, Perc2, Perc3, Perc4, Perc5, Perc6, Synth1, Synth2, Synth3, Synth4, Synth5, Kick) {

    /* 
     * Application is the object which manage the entiere application.
     *  PROPERTIES:
     *      data            (jsonObject)
     *      sound           (Sound)
     *      samples         (array)
     *      startExeprience (boolean)
     *
     *  METHODS:
     *      initialize
     *      loadData
     *      createSamples
     *      createSample
     *      playSound
     *      animate
     *      resize
     */
    var App = {
        data: {},
        sound: {},
        samples: [],
        startExperience: false,
        /*
         * Method called in first for initializing listeners and call the Introduction
         */
        initialize: function() {
            console.log('%c Initialize App ', 'background:black;color:white;font-size:14px');

            // Listeners
            window.addEventListener('StartExperience', function() {
                App.startExperience = true;
                _.delay(function() {
                    PixiPOV.hideAllChildrenInContainer();
                }, 1000);

                console.log('%c startExperience ', 'background:black;color:white;font-size:14px');
            }, false);
            window.addEventListener('resize', function() {
                App.resize();
            }, false);
            // load data
            App.loadData(this.createSamples);
            //start intro
            Intro.initialize();
        },
        /*
         * Method wich load all data for creating samples ...
         *  PARAMS
         *  callback: function called after the request success
         */
        loadData: function(callback) {
            $.ajax({
                dataType: "json",
                url: 'data/data.json',
                success: function(data) {
                    console.log('%c Data loaded ', 'background:black;color:white;font-size:14px');
                    // setup App.data
                    App.data = data;
                    if (callback)
                        callback();
                }
            });
        },
        /*
         * Method for create all sample and add them to the sample's application array
         * And call start application
         */
        createSamples: function() {
            console.log('%c Create samples ', 'background:black;color:white;font-size:14px');

            for (var i = 0, ln = App.data.samples.length; i < ln; i++) {
                App.createSample(App.data.samples[i].type, {
                    name: App.data.samples[i].name,
                    timeline: App.data.samples[i].timeline
                });
            }
            console.log('%c Create ' + App.samples.length + ' samples ', 'background:black;color:white;font-size:14px');

            App.animate();
            PixiPOV.initialize();
            App.playSound();
        },
        /*
         * Method for create an instance of a sample with type and properties.
         *  PARAMS
         *  type: the type of sample
         *  properties: the properties of a sample (name,timeline)
         */
        createSample: function(type, properties) {
            var sample;
            switch (type) {
                case 'perc1_01':
                    sample = new Perc1(properties);
                    break;
                case 'perc2_01':
                    sample = new Perc2(properties);
                    break;
                case 'perc3_01':
                    sample = new Perc3(properties);
                    break;
                case 'perc4_01':
                    sample = new Perc4(properties);
                    break;
                case 'perc5_01':
                    sample = new Perc5(properties);
                    break;
                case 'perc6_01':
                    sample = new Perc6(properties);
                    break;
                case 'Synth1_01':
                    sample = new Synth1(properties);
                    break;
                case 'Synth3_01':
                    sample = new Synth3(properties);
                    break;
                case 'Synth2_01':
                    sample = new Synth2(properties);
                    break;
                case 'Synth4_01':
                    sample = new Synth4(properties);
                    break;
                case 'Synth5_01':
                    sample = new Synth5(properties);
                    break;
                case 'kick_01':
                    sample = new Kick(properties);
                    break;
                default:
                    return;
                    break;
            }
            // add the sample in the sample's application array
            App.samples.push(sample);
        },
        /*
         * Method for creating a new instance of a sound and setup App.sound
         */
        playSound: function() {
            App.sound = new Sound();
        },
        /*
         * Method for streaming the audio 'currentTime' property and launch animation when the currentTime is equal to a sample timeline's step
         */
        animate: function() {
            if (App.sound.isPlaying) {
                // if the user has clicked to the play button of the introduction
                if (App.startExperience) {
                    // check for all samples if they have to launch them animation
                    for (var i = 0, ln = App.samples.length; i < ln; i++) {
                        App.samples[i].launchAnimation(App.sound.getCurrentTime());
                    }
                } else {
                    // loop the sound 0sec to 20sec
                    App.sound.loopIntro();
                }
            }
            requestAnimationFrame(App.animate);
        },
        /*
         * Method for handle the window's resize
         */
        resize: function() {
            // call resize method for PixiPOV with the new size of the window
            PixiPOV.resize(window.innerWidth, window.innerHeight);
        }
    }
    return App;

});