"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          latitude: 1.343572587250799,
          longitude: 103.68106886194161,
          index_code: 320641,
          location: "LT25",
          course_code: "IE1005",
          course_name: "FROM COMPUTATIONAL THINKING TO PROGRAMMING",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3425339920467496,
          longitude: 103.68093825022277,
          index_code: 320642,
          location: "S2-B3B-08",
          course_code: "IE1005",
          course_name: "FROM COMPUTATIONAL THINKING TO PROGRAMMING",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343572587250799,
          longitude: 103.68106886194161,
          index_code: 951262,
          location: "S2-15-17c",
          course_code: "FE1073",
          course_name: "AN INTRO TO ENGINEERING & PRACTICES",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500011,
          location: "LT13",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3434711770803955,
          longitude: 103.68155465385743,
          index_code: 500012,
          location: "TR+106",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500021,
          location: "LT13",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3435975764449015,
          longitude: 103.68164268217174,
          index_code: 500022,
          location: "TR+107",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500031,
          location: "LT13",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.34338785934377,
          longitude: 103.68162005938962,
          index_code: 500032,
          location: "TR+108",
          course_code: "MH1810",
          course_name: "MATHEMATICS I",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320671,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343393774518048,
          longitude: 103.6812354031642,
          index_code: 320672,
          location: "TR+64",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320681,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343364545179599,
          longitude: 103.68131824239249,
          index_code: 320682,
          location: "TR+62",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320691,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432037839032693,
          longitude: 103.68123053020734,
          index_code: 320692,
          location: "TR+61",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320701,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3433437673779052,
          longitude: 103.68167344787491,
          index_code: 320702,
          location: "TR+78",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320711,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.342739431488087,
          longitude: 103.6816956313571,
          index_code: 320712,
          location: "TR+90",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320721,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3427338872823251,
          longitude: 103.68186755406181,
          index_code: 320722,
          location: "TR+96",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320731,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3428170528422931,
          longitude: 103.68181764100038,
          index_code: 320732,
          location: "TR+94",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320741,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432146887059275,
          longitude: 103.68123655857399,
          index_code: 320742,
          location: "TR+61",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320751,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3435091894765436,
          longitude: 103.68093874390757,
          index_code: 320752,
          location: "TR+69",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320761,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343604613004824,
          longitude: 103.68104355152657,
          index_code: 320762,
          location: "TR+68",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320771,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343604613004824,
          longitude: 103.68104355152657,
          index_code: 320772,
          location: "TR+68",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320781,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3425025646546846,
          longitude: 103.68191382882394,
          index_code: 320782,
          location: "TR+95",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320791,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3425025646546846,
          longitude: 103.68191382882394,
          index_code: 320792,
          location: "TR+95",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320801,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3434517308693974,
          longitude: 103.68102259546369,
          index_code: 320802,
          location: "TR+67",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320811,
          location: "LKC-LT",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3433157032252478,
          longitude: 103.68132636877269,
          index_code: 320802,
          location: "TR+62",
          course_code: "MH1811",
          course_name: "MATHEMATICS II",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500041,
          location: "LT13",
          course_code: "PH1011",
          course_name: "PHYSICS",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3461809275835426,
          longitude: 103.680102800187,
          index_code: 500042,
          location: "LT13",
          course_code: "PH1011",
          course_name: "PHYSICS",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100012,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100022,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100032,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100042,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100052,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100062,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100072,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100082,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100092,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3432722156197532,
          longitude: 103.68292425549205,
          index_code: 100102,
          location: "TR+4",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3431781461497077,
          longitude: 103.68294613811348,
          index_code: 100112,
          location: "TR+5",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3431781461497077,
          longitude: 103.68294613811348,
          index_code: 100122,
          location: "TR+5",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3431781461497077,
          longitude: 103.68294613811348,
          index_code: 100132,
          location: "TR+5",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3431781461497077,
          longitude: 103.68294613811348,
          index_code: 100142,
          location: "TR+5",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3431781461497077,
          longitude: 103.68294613811348,
          index_code: 100152,
          location: "TR+5",
          course_code: "EG1001",
          course_name: "ENGINEERS IN SOCIETY",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320151,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.342829807299585,
          longitude: 103.68163279216054,
          index_code: 320152,
          location: "TR+88",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320161,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3428170528422931,
          longitude: 103.68181764100038,
          index_code: 320162,
          location: "TR+94",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320171,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3426404415957915,
          longitude: 103.68179515022639,
          index_code: 320172,
          location: "TR+93",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320181,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3428108707277004,
          longitude: 103.68164902797136,
          index_code: 320182,
          location: "TR+91",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320191,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3428676804449875,
          longitude: 103.681787032318,
          index_code: 320192,
          location: "TR+92",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320201,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3433383894403548,
          longitude: 103.68112407033034,
          index_code: 320202,
          location: "TR+65",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320211,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3433383894403548,
          longitude: 103.68112407033034,
          index_code: 320212,
          location: "TR+65",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320221,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343604613004824,
          longitude: 103.68104355152657,
          index_code: 320222,
          location: "TR+68",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320231,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3434517308693974,
          longitude: 103.68102259546369,
          index_code: 320232,
          location: "TR+67",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320241,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.343265348372885,
          longitude: 103.68118630758954,
          index_code: 320232,
          location: "TR+63",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320251,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3434517308693974,
          longitude: 103.68102259546369,
          index_code: 320252,
          location: "TR+67",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320261,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3428170528422931,
          longitude: 103.68181764100038,
          index_code: 320262,
          location: "TR+94",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320271,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.342739431488087,
          longitude: 103.6816956313571,
          index_code: 320272,
          location: "TR+90",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3424348582351153,
          longitude: 103.68234208015748,
          index_code: 320281,
          location: "LKC-LT",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: 1.3433383894403548,
          longitude: 103.68112407033034,
          index_code: 320282,
          location: "TR+65",
          course_code: "EE1102",
          course_name: "PHYSICS FOUNDATION FOR EEE",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};