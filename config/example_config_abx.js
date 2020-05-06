// configure the test here
// configure the test here
var TestConfig = {
  "TestName": "Percussive Sound Synthesis Evaluation",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/perc_synth_eval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 30,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Kicks 1",
      "TestID": "id0",
      "Files": {
        "A": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0.wav",
        "B": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0_noise.wav",
        "X": "audio/output_unison_avg/uni_alto_ros_SIN_YAM_f0_uni_alto_ros_CREPE.f0_noise.wav",
        "Y": " ",
      }
    }

  ]
}

