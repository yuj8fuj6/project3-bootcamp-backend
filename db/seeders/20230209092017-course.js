'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("courses", [
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE1005",
    academic_unit: "3",
    course_type: "Core",
    course_name: "FROM COMPUTATIONAL THINKING TO PROGRAMMING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "FE1073",
    academic_unit: "2",
    course_type: "Core",
    course_name: "AN INTRO TO ENGINEERING & PRACTICES"
  },
  {
    college: "Science",
    school: "SPMS",
    course_code: "MH1810",
    academic_unit: "3",
    course_type: "Core",
    course_name: "MATHEMATICS I"
  },
  {
    college: "Science",
    school: "SPMS",
    course_code: "MH1811",
    academic_unit: "3",
    course_type: "Core",
    course_name: "MATHEMATICS II"
  },
  {
    college: "Science",
    school: "SPMS",
    course_code: "PH1011",
    academic_unit: "3",
    course_type: "Core",
    course_name: "PHYSICS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EG1001",
    academic_unit: "2",
    course_type: "Core",
    course_name: "ENGINEERS IN SOCIETY"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE1102",
    academic_unit: "3",
    course_type: "Core",
    course_name: "PHYSICS FOUNDATION FOR EEE"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE1071",
    academic_unit: "1",
    course_type: "Core",
    course_name: "EEE LABORATORY 1"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE2104",
    academic_unit: "3",
    course_type: "Core",
    course_name: "DIGITAL ELECTRONICS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE2101",
    academic_unit: "3",
    course_type: "Core",
    course_name: "CIRCUIT ANALYSIS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE2103",
    academic_unit: "3",
    course_type: "Core",
    course_name: "SEMICONDUCTOR FUNDAMENTALS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE2106",
    academic_unit: "3",
    course_type: "Core",
    course_name: "ENGINEERING MATHEMATICS I"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE0005",
    academic_unit: "3",
    course_type: "Core",
    course_name: "INTRODUCTION TO DATA SCIENCE & ARTIFICIAL INTELLIGENCE"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE2102",
    academic_unit: "3",
    course_type: "Core",
    course_name: "ANALOG ELECTRONICS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE2107",
    academic_unit: "3",
    course_type: "Core",
    course_name: "ENGINEERING MATHEMATICS II"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE2108",
    academic_unit: "3",
    course_type: "Core",
    course_name: "DATA STRUCTURES & ALGORITHMS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE2110",
    academic_unit: "3",
    course_type: "Core",
    course_name: "SIGNALS AND SYSTEMS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE2073",
    academic_unit: "2",
    course_type: "Core",
    course_name: "INTRODUCTION TO EEE DESIGN & PROJECT"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE3101",
    academic_unit: "3",
    course_type: "Core",
    course_name: "ENGINEERING ELECTROMAGNETICS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE3180",
    academic_unit: "3",
    course_type: "Core",
    course_name: "DESIGN & INNOVATION PROJECT"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE3014",
    academic_unit: "3",
    course_type: "Prescribed Elective",
    course_name: "DIGITAL SIGNAL AND PROCESSING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE3012",
    academic_unit: "3",
    course_type: "Prescribed Elective",
    course_name: "COMMUNICATION PRINCIPLES"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "IE3017",
    academic_unit: "3",
    course_type: "Prescribed Elective",
    course_name: "COMPUTER COMMUNICATIONS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE2005",
    academic_unit: "3",
    course_type: "Core",
    course_name: "ELECTRICAL DEVICES AND MACHINES"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4109",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "WIRELESS SYSTEM DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4110",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "OPTICAL COMMUNICATION SYSTEM DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4208",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "INTELLIGENT SYSTEM DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4413",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "DSP SYSTEM DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4414",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "MACHINE LEARNING DESIGN & APPLICATION"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4717",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "WEB APPLICATION DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4718",
    academic_unit: "3",
    course_type: "Design Elective",
    course_name: "ENTERPRISE NETWORK DESIGN"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4001",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "SOFTWARE ENGINEERING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4154",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "DIGITAL & ANALOG COMMUNICATION SYSTEMS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4155",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "WIRELESS COMMUNICATIONS & MOBILE NETWORKS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4285",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "COMPUTATIONAL INTELLIGENCE"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4476",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "IMAGE PROCESSING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4483",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "ARTIFICIAL INTELLIGENCE AND DATA MINING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4491",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "PROBABILITY THEORY AND APPLICATIONS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4497",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "PATTERN RECOGNITION & MACHINE LEARNING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4756",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "COMPUTER ARCHITECTURE"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4758",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "INFORMATION SECURITY"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4791",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "DATABASE SYSTEMS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE6108",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "COMPUTER NETWORKS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE6403",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "DISTRIBUTED MULTIMEDIA SYSTEMS"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE6427",
    academic_unit: "3",
    course_type: "Technical Elective",
    course_name: "VIDEO SIGNAL PROCESSING"
  },
  {
    college: "Engineering",
    school: "EEE",
    course_code: "EE4080",
    academic_unit: "8",
    course_type: "Core",
    course_name: "FINAL YEAR PROJECT"
  }
])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("courses", null, {});
  }
};
