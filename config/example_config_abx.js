// configure the test here
// configure the test here
var TestConfig = {
  "TestName": "Performance Driven Synthesis Evaluation",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
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
        "A": "audio/Kicks/op_4_9.wav",
        "B": "audio/Kicks/opH_4_9.wav",
        "X": "audio/Kicks/gt_4_9.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 2",
      "TestID": "id1",
      "Files": {
        "A": "audio/Kicks/opH_4_7.wav",
        "B": "audio/Kicks/opF_4_7.wav",
        "X": "audio/Kicks/gt_4_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 3",
      "TestID": "id2",
      "Files": {
        "A": "audio/Kicks/opH_3_4.wav",
        "B": "audio/Kicks/op_3_4.wav",
        "X": "audio/Kicks/gt_3_4.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 4",
      "TestID": "id3",
      "Files": {
        "A": "audio/Kicks/opF_1_12.wav",
        "B": "audio/Kicks/op_1_12.wav",
        "X": "audio/Kicks/gt_1_12.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 5",
      "TestID": "id4",
      "Files": {
        "A": "audio/Kicks/op_3_14.wav",
        "B": "audio/Kicks/opF_3_14.wav",
        "X": "audio/Kicks/gt_3_14.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 6",
      "TestID": "id5",
      "Files": {
        "A": "audio/Kicks/opH_2_1.wav",
        "B": "audio/Kicks/opF_2_1.wav",
        "X": "audio/Kicks/gt_2_1.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 7",
      "TestID": "id6",
      "Files": {
        "A": "audio/Kicks/opF_2_11.wav",
        "B": "audio/Kicks/opH_2_11.wav",
        "X": "audio/Kicks/gt_2_11.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 8",
      "TestID": "id7",
      "Files": {
        "A": "audio/Kicks/op_19_10.wav",
        "B": "audio/Kicks/opH_19_10.wav",
        "X": "audio/Kicks/gt_19_10.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 9",
      "TestID": "id8",
      "Files": {
        "A": "audio/Kicks/opH_4_12.wav",
        "B": "audio/Kicks/opF_4_12.wav",
        "X": "audio/Kicks/gt_4_12.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 10",
      "TestID": "id9",
      "Files": {
        "A": "audio/Kicks/opH_0_14.wav",
        "B": "audio/Kicks/op_0_14.wav",
        "X": "audio/Kicks/gt_0_14.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 11",
      "TestID": "id10",
      "Files": {
        "A": "audio/Kicks/op_5_0.wav",
        "B": "audio/Kicks/opF_5_0.wav",
        "X": "audio/Kicks/gt_5_0.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 12",
      "TestID": "id11",
      "Files": {
        "A": "audio/Kicks/opF_19_8.wav",
        "B": "audio/Kicks/opH_19_8.wav",
        "X": "audio/Kicks/gt_19_8.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 13",
      "TestID": "id12",
      "Files": {
        "A": "audio/Kicks/opF_0_7.wav",
        "B": "audio/Kicks/op_0_7.wav",
        "X": "audio/Kicks/gt_0_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 14",
      "TestID": "id13",
      "Files": {
        "A": "audio/Kicks/op_18_15.wav",
        "B": "audio/Kicks/opH_18_15.wav",
        "X": "audio/Kicks/gt_18_15.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 15",
      "TestID": "id14",
      "Files": {
        "A": "audio/Kicks/opF_19_12.wav",
        "B": "audio/Kicks/op_19_12.wav",
        "X": "audio/Kicks/gt_19_12.wav",
        "Y": " ",
      }
    },
    {
    "Name": "Audio Quality 1",
      "TestID": "id11",
      "Files": {
        "A": "audio/gl_4.mp3",
        "B": "audio/npss_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 2",
      "TestID": "id12",
      "Files": {
        "A": "audio/gl_1.mp3",
        "B": "audio/ori_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 3",
      "TestID": "id13",
      "Files": {
        "A": "audio/gc_4.mp3",
        "B": "audio/gl_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 4",
      "TestID": "id14",
      "Files": {
        "A": "audio/gl_2.mp3",
        "B": "audio/npss_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 5",
      "TestID": "id15",
      "Files": {
        "A": "audio/gc_1.mp3",
        "B": "audio/gl_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },    
    {
      "Name": "Audio Quality 6",
      "TestID": "id15",
      "Files": {
        "A": "audio/gl_4.mp3",
        "B": "audio/ori_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },    //
    {
      "Name": "Audio Quality 7",
      "TestID": "id1",
      "Files": {
        "A": "audio/gl_2.mp3",
        "B": "audio/gc_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 8",
      "TestID": "id2",
      "Files": {
        "A": "audio/ori_3.mp3",
        "B": "audio/gl_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 9",
      "TestID": "id3",
      "Files": {
        "A": "audio/npss_1.mp3",
        "B": "audio/gl_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 10",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_3.mp3",
        "B": "audio/gc_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 11",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_3.mp3",
        "B": "audio/npss_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 12",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_5.mp3",
        "B": "audio/npss_5.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 13",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_2.mp3",
        "B": "audio/ori_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 14",
      "TestID": "id4",
      "Files": {
        "A": "audio/gcc_5.mp3",
        "B": "audio/gl_5.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 15",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_5.mp3",
        "B": "audio/ori_5.mp3",
        "X": " ",
        "Y": " ",
      }
    },
     
  ]
}

