"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "forums",
      [
        {
          id: "8d6f46a6-a258-48e3-b0df-43ff71cd776b",
          title: "IE1005 - FROM COMPUTATIONAL THINKING TO PROGRAMMING",
          description:
            "The aim of this course is hence to take students with no prior experience of thinking in a computational manner to a point where you can derive simple algorithms and code the programs to solve some basic problems in your domain of studies. Student will also learn about basic program construct and simple data structures. In addition, the course will include topics to appreciate the internal operations of a processor.",
          course_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2f541cf8-4fdd-45a7-8a94-73215f27602b",
          title: "FE1073 - AN INTRO TO ENGINEERING & PRACTICES",
          description:
            "This course aims to reinforce students’ understanding of physics by experiments, to equip students with basic experimental skills related to physics, and to prepare students with basic knowledge of engineering and practices, to appreciate the contributions of engineers’ to societies technological development and well being",
          course_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "d8e5c695-1147-42c1-8a3f-c70cd18c9926",
          title: "MH1810 - MATHEMATICS I",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "95c879c4-808d-4a74-93f4-270ec0981f78",
          title: "MH1811 - MATHEMATICS II",
          description:
            "This course aims to build a strong foundation in the relevant physics principles used in the design of common electrical and electronic devices. The course builds on the concepts learned in the common engineering curriculum’s first semester physics course. This course focuses on fundamental concepts that are key to EEE students in preparation for subsequent studies, and are utilized daily by electrical and electronics engineering professionals. You will learn the relationship between physics concepts and their applications in EEE.",
          course_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "49ba546c-6d03-48b0-bd0d-f6253d2e185b",
          title: "PH1011 - PHYSICS",
          description:
            "This course aims to reinforce students’ understanding of physics by experiments, to equip students with basic experimental skills related to physics, and to prepare students with basic knowledge of engineering and practices, to appreciate the contributions of engineers’ to societies technological development and well being",
          course_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "fc7aae16-91d7-4603-81e8-d12d5e179b15",
          title: "EG1001 - ENGINEERS IN SOCIETY",
          description:
            "This course aims to reinforce students’ understanding of physics by experiments, to equip students with basic experimental skills related to physics, and to prepare students with basic knowledge of engineering and practices, to appreciate the contributions of engineers’ to societies technological development and well being",
          course_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "80c33f65-9c14-4f21-a0f6-6fb63e4231f1",
          title: "EE1102 - PHYSICS FOUNDATION FOR EEE",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "aa7c7401-00bf-47c1-a5f1-877239524720",
          title: "EE1071 - EEE LABORATORY 1",
          description:
            "This course aims to build a strong foundation in the relevant physics principles used in the design of common electrical and electronic devices. The course builds on the concepts learned in the common engineering curriculum’s first semester physics course. This course focuses on fundamental concepts that are key to EEE students in preparation for subsequent studies, and are utilized daily by electrical and electronics engineering professionals. You will learn the relationship between physics concepts and their applications in EEE.",
          course_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "819ed7f2-d90d-4afb-a661-901ede58789c",
          title: "IE2104 - DIGITAL ELECTRONICS",
          description:
            "The aim of this course is hence to take students with no prior experience of thinking in a computational manner to a point where you can derive simple algorithms and code the programs to solve some basic problems in your domain of studies. Student will also learn about basic program construct and simple data structures. In addition, the course will include topics to appreciate the internal operations of a processor.",
          course_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "739c18ef-4281-4751-943c-45a8efbfbcc8",
          title: "EE2101 - CIRCUIT ANALYSIS",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "fef6150f-8634-44c2-85a5-a6523db57cbf",
          title: "EE2103 - SEMICONDUCTOR FUNDAMENTALS",
          description:
            "This course aims to reinforce students’ understanding of physics by experiments, to equip students with basic experimental skills related to physics, and to prepare students with basic knowledge of engineering and practices, to appreciate the contributions of engineers’ to societies technological development and well being",
          course_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "6bda1533-514c-4f01-94e9-c8e0a7cee10e",
          title: "IE2106 - ENGINEERING MATHEMATICS I",
          description:
            "The aim of this course is hence to take students with no prior experience of thinking in a computational manner to a point where you can derive simple algorithms and code the programs to solve some basic problems in your domain of studies. Student will also learn about basic program construct and simple data structures. In addition, the course will include topics to appreciate the internal operations of a processor.",
          course_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3417aa35-8b3e-4eae-9435-89466042e504",
          title:
            "IE0005 - INTRODUCTION TO DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "59f89cd7-cd45-4610-bb35-4d02f2bd6a93",
          title: "EE2102 - ANALOG ELECTRONICS",
          description:
            "This course aims to build a strong foundation in the relevant physics principles used in the design of common electrical and electronic devices. The course builds on the concepts learned in the common engineering curriculum’s first semester physics course. This course focuses on fundamental concepts that are key to EEE students in preparation for subsequent studies, and are utilized daily by electrical and electronics engineering professionals. You will learn the relationship between physics concepts and their applications in EEE.",
          course_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9e37d651-3c78-4e72-b94c-2c5e2b20fcb8",
          title: "IE2107 - ENGINEERING MATHEMATICS II",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "ddc0fea5-370a-4fdc-bb24-658f74e3d5c6",
          title: "IE2108 - DATA STRUCTURES & ALGORITHMS",
          description:
            "The aim of this course is hence to take students with no prior experience of thinking in a computational manner to a point where you can derive simple algorithms and code the programs to solve some basic problems in your domain of studies. Student will also learn about basic program construct and simple data structures. In addition, the course will include topics to appreciate the internal operations of a processor.",
          course_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "79275d5d-ed12-44c0-8307-8252f11715f9",
          title: "IE2110 - SIGNALS AND SYSTEMS",
          description:
            "This course aims to build a strong foundation in the relevant physics principles used in the design of common electrical and electronic devices. The course builds on the concepts learned in the common engineering curriculum’s first semester physics course. This course focuses on fundamental concepts that are key to EEE students in preparation for subsequent studies, and are utilized daily by electrical and electronics engineering professionals. You will learn the relationship between physics concepts and their applications in EEE.",
          course_id: 17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f23cde5b-cc01-4e67-a7b2-3e1026a5fb1e",
          title: "EE2073 - INTRODUCTION TO EEE DESIGN & PROJECT",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 18,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "44d126e6-0ba8-45c4-8757-d5df8d90f82a",
          title: "EE3101 - ENGINEERING ELECTROMAGNETICS",
          description:
            "This course aims to build a strong foundation in the relevant physics principles used in the design of common electrical and electronic devices. The course builds on the concepts learned in the common engineering curriculum’s first semester physics course. This course focuses on fundamental concepts that are key to EEE students in preparation for subsequent studies, and are utilized daily by electrical and electronics engineering professionals. You will learn the relationship between physics concepts and their applications in EEE.",
          course_id: 19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "85339ff6-75f2-4e66-9440-07f5edd7de1b",
          title: "EE3180 - DESIGN & INNOVATION PROJECT",
          description:
            "This course aims to provide a general understanding of the society we live in and the engineers’ roles and responsibilities towards society’s well-being. The course is part of broadening education objective in the engineering curriculum. The course covers a wide range of topics including the history of engineering, engineering ethics and practices, sustainability, and contributions by engineers towards society in the future. The students will have a holistic understanding of the role played by engineers and on their impact in society.",
          course_id: 20,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("forums", null, {});
  },
};
