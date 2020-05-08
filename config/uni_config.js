// configure the test here
var TestConfig = {
  "TestName": "Unison Analysis And Synthesis Listening Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":50,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/unison_eval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 24,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Please rate the Test Items in terms of audio quality with respect to the Reference",
      "TestID": "qi1",
      "Files": {
            "Reference": "audio/uni_alto_ros.mp3",
            "1": "audio/uni_alto_ros_SIN.mp3",
            "2": "audio/sol_alto1_ro_0.5_4_0_unison.mp3",
            "3": "audio/sol_alto1_ro_0.5_4_5_unison.mp3",
            // "4":"audio/sol_alto1_loc.wav",
            "anchor":"audio/sol_tenor1_ros.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of audio quality with respect to the Reference",
      "TestID": "qi2",
      "Files": {
            "Reference": "audio/uni_tenor_ros.mp3",
            "1": "audio/uni_tenor_ros_SIN.mp3",
            "2": "audio/sol_tenor1_ro_0.5_4_0_unison.mp3",
            "3": "audio/sol_tenor1_ro_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_tenor1_loc.wav",
            "anchor":"audio/sol_alto1_ros.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of audio quality with respect to the Reference",
      "TestID": "qi3",
      "Files": {
            "Reference": "audio/uni_soprano_nin.mp3",
            "1": "audio/uni_soprano_nin_SIN.mp3",
            "2": "audio/sol_soprano1_ni_0.5_4_0_unison.mp3",
            "3": "audio/sol_soprano1_ni_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_soprano1_ros.wav",
            "anchor":"audio/sol_bass1_loc.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of audio quality with respect to the Reference",
      "TestID": "qi4",
      "Files": {
            "Reference": "audio/uni_bass_loc.mp3",
            "1": "audio/uni_bass_loc_SIN.mp3",
            "2": "audio/sol_bass1_lo_0.5_4_0_unison.mp3",
            "3": "audio/sol_bass1_lo_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_bass1_nin.wav",
            "anchor":"audio/sol_soprano1_nin.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of unison singing as heard in the Reference",
      "TestID": "uni1",
      "Files": {
            "Reference": "audio/uni_soprano_ros.mp3",
            "1": "audio/sol_soprano1_ro_0_4_5_unison.mp3",
            "2": "audio/sol_soprano1_ro_0.5_4_0_unison.mp3",
            "3": "audio/sol_soprano1_ro_0.5_4_5_unison.mp3",
            "4": "audio/sol_soprano1_ro_0.5_4_5_unison_notimbre.mp3",
            "anchor":"audio/uni_alto_nin.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of unison singing as heard in the Reference",
      "TestID": "uni2",
      "Files": {
            "Reference": "audio/uni_alto_nin.mp3",
            "1": "audio/sol_alto1_ni_0_4_5.mp3",
            "2": "audio/sol_alto1_ni_0.5_4_0.mp3",
            "3": "audio/sol_alto1_ni_0.5_4_5.mp3",
            "4": "audio/sol_alto1_ni_0.5_4_5_notimbre.mp3",
            "anchor":"audio/uni_bass_nin.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of unison singing as heard in the Reference",
      "TestID": "uni3",
      "Files": {
            "Reference": "audio/uni_bass_nin.mp3",
            "1": "audio/sol_bass1_ni_0_4_5.mp3",
            "2": "audio/sol_bass1_ni_0.5_4_0.mp3",
            "3": "audio/sol_bass1_ni_0.5_4_5.mp3",
            "4": "audio/sol_bass1_ni_0.5_4_5_notimbre.mp3",
            "anchor":"audio/uni_soprano_ros.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of unison singing as heard in the Reference",
      "TestID": "uni4",
      "Files": {
            "Reference": "audio/uni_tenor_loc.mp3",
            "1": "audio/sol_tenor1_lo_0_4_5.mp3",
            "2": "audio/sol_tenor1_lo_0.5_4_0.mp3",
            "3": "audio/sol_tenor1_lo_0.5_4_5.mp3",
            "4": "audio/sol_tenor1_lo_0.5_4_5_notimbre.mp3",
            "anchor":"audio/uni_alto_nin.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of similarity of melody and lyrics to the Reference",
      "TestID": "ml1",
      "Files": {
            "Reference": "audio/uni_alto_ros.mp3",
            "1": "audio/uni_alto_ros_SIN.mp3",
            "2": "audio/sol_alto1_ro_0.5_4_0_unison.mp3",
            "3": "audio/sol_alto1_ro_0.5_4_5_unison.mp3",
            // "4":"audio/sol_alto1_loc.wav",
            "anchor":"audio/sol_tenor1_ros.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of similarity of melody and lyrics to the Reference",
      "TestID": "ml2",
      "Files": {
            "Reference": "audio/uni_tenor_ros.mp3",
            "1": "audio/uni_tenor_ros_SIN.mp3",
            "2": "audio/sol_tenor1_ro_0.5_4_0_unison.mp3",
            "3": "audio/sol_tenor1_ro_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_tenor1_loc.wav",
            "anchor":"audio/sol_alto1_ros.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of similarity of melody and lyrics to the Reference",
      "TestID": "ml3",
      "Files": {
            "Reference": "audio/uni_soprano_nin.mp3",
            "1": "audio/uni_soprano_nin_SIN.mp3",
            "2": "audio/sol_soprano1_ni_0.5_4_0_unison.mp3",
            "3": "audio/sol_soprano1_ni_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_soprano1_ros.wav",
            "anchor":"audio/sol_bass1_loc.mp3",
        }
    },
    {
      "Name": "Please rate the Test Items in terms of similarity of melody and lyrics to the Reference",
      "TestID": "ml4",
      "Files": {
            "Reference": "audio/uni_bass_loc.mp3",
            "1": "audio/uni_bass_loc_SIN.mp3",
            "2": "audio/sol_bass1_lo_0.5_4_0_unison.mp3",
            "3": "audio/sol_bass1_lo_0.5_4_5_unison.mp3",
            // "4":"audio/Unison_analysis_examples/sol_bass1_nin.wav",
            "anchor":"audio/sol_soprano1_nin.mp3",
        }
    }
  ]
}
