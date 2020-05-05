// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 15,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "UTS1",
      "TestID": "uts_ros_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_alto_ros.wav",
            "1": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_alto_loc_SIN_YAM_f0_uni_alto_loc_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_alto1_ros.wav",
        }
    },
    {
      "Name": "UTS2",
      "TestID": "uts_ros_tenor",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_tenor_ros.wav",
            "1": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_tenor_nin_SIN_YAM_f0_uni_tenor_nin_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_tenor1_ros.wav",
        }
    },
    {
      "Name": "UTS2",
      "TestID": "uts_nin_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_soprano_nin.wav",
            "1": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_tenor_loc_SIN_YAM_f0_uni_tenor_loc_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_tenor1_ros.wav",
        }
    },
  ]
}
