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
      "TestID": "id1",
      "Files": {
        "A": "audio/Kicks/op_4_9.wav",
        "B": "audio/Kicks/opH_4_9.wav",
        "X": "audio/Kicks/gt_4_9.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Kicks 2",
      "TestID": "id2",
      "Files": {
        "A": "audio/Kicks/opH_4_7.wav",
        "B": "audio/Kicks/opF_4_7.wav",
        "X": "audio/Kicks/gt_4_7.wav",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 3",
      "TestID": "id3",
      "Files": {
        "A": "audio/gl_1.mp3",
        "B": "audio/gc_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 4",
      "TestID": "id4",
      "Files": {
        "A": "audio/gl_4.mp3",
        "B": "audio/gc_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 5",
      "TestID": "id5",
      "Files": {
        "A": "audio/gl_2.mp3",
        "B": "audio/ori_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 6",
      "TestID": "id6",
      "Files": {
        "A": "audio/npss_1.mp3",
        "B": "audio/gl_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 7",
      "TestID": "id7",
      "Files": {
        "A": "audio/gc_2.mp3",
        "B": "audio/gl_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 8",
      "TestID": "id3",
      "Files": {
        "A": "audio/gl_4.mp3",
        "B": "audio/ori_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 9",
      "TestID": "id3",
      "Files": {
        "A": "audio/npss_3.mp3",
        "B": "audio/gl_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 10",
      "TestID": "id10",
      "Files": {
        "A": "audio/ori_1.mp3",
        "B": "audio/gl_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 11",
      "TestID": "id10",
      "Files": {
        "A": "audio/gl_5.mp3",
        "B": "audio/npss_5.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 12",
      "TestID": "id10",
      "Files": {
        "A": "audio/gc_3.mp3",
        "B": "audio/gl_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 13",
      "TestID": "id10",
      "Files": {
        "A": "audio/ori_3.mp3",
        "B": "audio/gl_3.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 14",
      "TestID": "id10",
      "Files": {
        "A": "audio/npss_4.mp3",
        "B": "audio/gl_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 15",
      "TestID": "id10",
      "Files": {
        "A": "audio/gl_5.mp3",
        "B": "audio/gcc_5.mp3",
        "X": " ",
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

