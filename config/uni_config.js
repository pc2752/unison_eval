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
      "Name": "UTS3",
      "TestID": "uts_nin_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_soprano_nin.wav",
            "1": "audio/output_unison_avg/uni_tenor_nin_SIN_YAM_f0_uni_tenor_nin_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_tenor_nin_SIN_YAM_f0_uni_tenor_nin_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_tenor_nin_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_soprano1_nin.wav",
        }
    },
    {
      "Name": "UTS4",
      "TestID": "uts_nin_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_bass_nin.wav",
            "1": "audio/output_unison_avg/uni_bass_nin_SIN_YAM_f0_uni_bass_nin_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_bass_nin_SIN_YAM_f0_uni_bass_nin_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_bass_ros_SIN_YAM_f0_uni_bass_ros_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_bass_nin_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_bass1_nin.wav",
        }
    },
    {
      "Name": "UTS5",
      "TestID": "uts_loc_tenor",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_tenor_loc.wav",
            "1": "audio/output_unison_avg/uni_tenor_loc_SIN_YAM_f0_uni_tenor_loc_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_tenor_loc_SIN_YAM_f0_uni_tenor_loc_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_tenor_loc_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_tenor1_loc.wav",
        }
    },
    {  
      "Name": "UTS6",
      "TestID": "uts_ros_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_soprano_ros.wav",
            "1": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_tenor_nin_SIN_YAM_f0_uni_tenor_nin_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_soprano1_ros.wav",
        }
    },
    {
      "Name": "UTS7",
      "TestID": "uts_loc_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_bass_loc.wav",
            "1": "audio/output_unison_avg/uni_bass_loc_SIN_YAM_f0_uni_bass_loc_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_bass_loc_SIN_YAM_f0_uni_bass_loc_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_bass_loc_SIN_YAM_f0_uni_bass_loc_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_bass_loc_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_bass1_loc.wav",
        }
    },  
    {
      "Name": "UTS8",
      "TestID": "uts_nin_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_alto_nin.wav",
            "1": "audio/output_unison_avg/uni_alto_nin_SIN_YAM_f0_uni_alto_nin_CREPE.f0.wav",
            "2": "audio/output_unison_avg/uni_alto_nin_SIN_YAM_f0_uni_alto_nin_CREPE.f0_noise.wav",
            "3": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0.wav",
            "4": "audio/output_unison_avg/uni_alto_nin_SIN_YAM_SACf0.wav",
            "anchor":"audio/Unison_analysis_examples/sol_alto1_nin.wav",
        }
    },
    {
      "Name": "STU1",
      "TestID": "stu_ros_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_soprano_ros.wav",
            "1": "audio/outputs_uni/sol_soprano1_ro_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_soprano1_ro_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_soprano1_ro_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_soprano1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_soprano1_ro_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU2",
      "TestID": "stu_nin_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_alto_nin.wav",
            "1": "audio/outputs_uni/sol_alto1_ni_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_alto1_ni_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_alto1_ni_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_alto1_ni_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_alto1_ni_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU3",
      "TestID": "stu_nin_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_bass_nin.wav",
            "1": "audio/outputs_uni/sol_bass1_ni_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_bass1_ni_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_bass1_ni_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_bass1_ni_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_bass1_ni_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU4",
      "TestID": "stu_loc_tenor",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_tenor_loc.wav",
            "1": "audio/outputs_uni/sol_tenor1_lo_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_tenor1_lo_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_tenor1_lo_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_tenor1_lo_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_tenor1_lo_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU5",
      "TestID": "stu_ros_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_alto_ros.wav",
            "1": "audio/outputs_uni/sol_alto1_ro_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_alto1_ro_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_alto1_ro_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_alto1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_alto1_ro_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU6",
      "TestID": "stu_nin_ten",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_tenor_nin.wav",
            "1": "audio/outputs_uni/sol_tenor1_ni_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_tenor1_ni_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_tenor1_ni_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_tenor1_ni_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_tenor1_ni_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU7",
      "TestID": "stu_loc_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_soprano_loc.wav",
            "1": "audio/outputs_uni/sol_soprano1_lo_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_soprano1_lo_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_soprano1_lo_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_soprano1_lo_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_soprano1_lo_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "STU8",
      "TestID": "stu_ros_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/uni_bass_ros.wav",
            "1": "audio/outputs_uni/sol_bass1_ro_0_4_0_unison_notimbre.wav",
            "2": "audio/outputs_uni/sol_bass1_ro_0.5_4_0_unison.wav",
            "3": "audio/outputs_uni/sol_bass1_ro_0_4_5_unison.wav",
            "4": "audio/outputs_uni/sol_bass1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/outputs_uni/sol_bass1_ro_0.5_4_5_unison_notimbre.wav",
        }
    },
    {
      "Name": "QI1",
      "TestID": "qi_loc_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_bass1_loc.wav",
            "1": "audio/outputs_uni/sol_bass1_lo_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_bass_loc_SIN_YAM_f0_uni_bass_loc_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_bass1_lo_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_bass1_lo_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_bass_loc.wav",
        }
    },
    {
      "Name": "QI2",
      "TestID": "qi_nin_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_alto1_nin.wav",
            "1": "audio/outputs_uni/sol_alto1_ni_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_alto_nin_SIN_YAM_f0_uni_alto_nin_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_alto1_ni_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_alto1_ni_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_alto_nin.wav",
        }
    },
    {
      "Name": "QI3",
      "TestID": "qi_ros_tenor",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_tenor1_ros.wav",
            "1": "audio/outputs_uni/sol_tenor1_ro_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_tenor_ros_SIN_YAM_f0_uni_tenor_ros_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_tenor1_ro_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_tenor1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_tenor_ros.wav",
        }
    },
    {
      "Name": "QI4",
      "TestID": "qi_ros_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_soprano1_ros.wav",
            "1": "audio/outputs_uni/sol_soprano1_ro_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_soprano_ros_SIN_YAM_f0_uni_soprano_ros_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_soprano1_ro_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_soprano1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_soprano_ros.wav",
        }
    },
    {
      "Name": "QI5",
      "TestID": "qi_loc_tenor",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_tenor1_loc.wav",
            "1": "audio/outputs_uni/sol_tenor1_lo_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_tenor_loc_SIN_YAM_f0_uni_tenor_loc_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_tenor1_lo_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_tenor1_lo_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_tenor_loc.wav",
        }
    },
    {
      "Name": "QI6",
      "TestID": "qi_loc_alto",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_alto1_loc.wav",
            "1": "audio/outputs_uni/sol_alto1_lo_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_alto_loc_SIN_YAM_f0_uni_alto_loc_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_alto1_lo_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_alto1_lo_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_alto_loc.wav",
        }
    },
    {
      "Name": "QI7",
      "TestID": "qi_nin_soprano",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_soprano1_nin.wav",
            "1": "audio/outputs_uni/sol_soprano1_ni_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_soprano_nin_SIN_YAM_f0_uni_soprano_nin_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_soprano1_ni_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_soprano1_ni_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_soprano_nin.wav",
        }
    },
    {
      "Name": "QI8",
      "TestID": "qi_ros_bass",
      "Files": {
            "Reference": "audio/Unison_analysis_examples/sol_bass1_ros.wav",
            "1": "audio/outputs_uni/sol_bass1_ro_0_4_0_unison.wav",
            "2": "audio/output_unison_avg/uni_bass_ros_SIN_YAM_f0_uni_bass_ros_CREPE.f0.wav",
            "3": "audio/outputs_uni/sol_bass1_ro_0.5_4_5_unison_notimbre.wav",
            "4": "audio/outputs_uni/sol_bass1_ro_0.5_4_5_unison.wav",
            "anchor":"audio/Unison_analysis_examples/uni_bass_ros.wav",
        }
    }
  ]
}
