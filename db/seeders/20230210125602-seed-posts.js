"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          id: "4ce076e5-7a77-456c-9a35-1778955156e5",
          content:
            "Here is mine..HE191 Principles of Econs 58025 MB101 Accounting 00584 Hope to change for another elective..",
          student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
          forum_id: "8d6f46a6-a258-48e3-b0df-43ff71cd776b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "73045629-ea7b-4e25-9b93-ab84849d1d04",
          content:
            "HE191, 50305. Hope to change for another index number! Bros who want to drop econs at the end of the add/drop please tell me so can swap before u drop! Thanks!",
          student_id: "22252fc1-ca47-4e93-b26c-d52ba74e26c6",
          forum_id: "8d6f46a6-a258-48e3-b0df-43ff71cd776b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0542af6d-bace-49b4-9c67-50c2921f0875",
          content:
            "anyone willing to sell malay/jap/korea electives pls pm me! a million of thanks!",
          student_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          forum_id: "8d6f46a6-a258-48e3-b0df-43ff71cd776b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "27932e5b-4e22-4aee-9189-a75ac28c06d0",
          content:
            "Well I got GN02 to offer, but I only want AAU280 39231.. lol",
          student_id: "ab27eb29-bfa5-41f8-adbd-f422587936bd",
          forum_id: "85339ff6-75f2-4e66-9440-07f5edd7de1b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "43c8b7e8-3f8d-4213-b2a4-cdae03fbcd9e",
          content:
            "i'm looking for HS809 UNDERSTANDING CHINA TODAY and MB101, index: 00582. currently, i've HE191, index: 10497.",
          student_id: "73824e09-b626-4eb1-86b0-7ca5bd5fe159",
          forum_id: "2f541cf8-4fdd-45a7-8a94-73215f27602b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3ded4cd8-8fc0-41cb-9522-f7b174067313",
          content:
            "Anyone want to trade their CSC102 index 10362 (tut W 1030-1130) with my CSC102 index 10311 (tut T 1130-1230)?",
          student_id: "b17dfe4b-09ec-48f7-8cec-f1f652ca34d7",
          forum_id: "2f541cf8-4fdd-45a7-8a94-73215f27602b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f07bc941-cb79-4431-b51e-6248706fc30e",
          content: "Can someone drop EE2004 32065 or 32066 for me?",
          student_id: "f530c66e-8028-4fd5-ab1a-045d5068576d",
          forum_id: "2f541cf8-4fdd-45a7-8a94-73215f27602b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "27cd9369-4792-43cc-9081-692eb74ae9c5",
          content:
            "Camp in the morning at 10. Alot of vacancies for different mods. I got mine changed! ",
          student_id: "200adddd-f6dc-4219-afa8-b0e45021e33a",
          forum_id: "d8e5c695-1147-42c1-8a3f-c70cd18c9926",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "cd056aa9-6bc5-42c8-8ddb-b26d77bddf6b",
          content:
            "hi i got HP805 INTRODUCTION TO HUMAN RESOURCE MANAGEMENT . anyone has anyother AHSS modules to swap?",
          student_id: "bd7442fb-53b7-4606-a54e-66b2182f4563",
          forum_id: "d8e5c695-1147-42c1-8a3f-c70cd18c9926",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "28f32a04-36d6-4d6d-a1b2-57a0bd18eb69",
          content:
            "i've just dropped 10497. those who want it better hurry else it'll be gone soon..",
          student_id: "45e0353e-54d1-42a9-a9a0-c93380680b43",
          forum_id: "d8e5c695-1147-42c1-8a3f-c70cd18c9926",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "ba183063-1c1c-4b32-8c9a-512b5aa5b9fd",
          content:
            "i'm looking for 17495. anyone who has it and wanna drop it, pm me.",
          student_id: "904c2801-5ab9-492a-b61c-c3cf0c18ca92",
          forum_id: "95c879c4-808d-4a74-93f4-270ec0981f78",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c6ff2530-5df7-433c-8de1-4eed8c5a268b",
          content:
            "apart fr yeapa11, anyone else wants to swap HP805 INTRODUCTION TO HUMAN RESOURCE for HG803 or EE8061 Inno & Tech? pm me asap!",
          student_id: "f1d20859-618f-4ad0-9bcd-0c3f0fa6348e",
          forum_id: "95c879c4-808d-4a74-93f4-270ec0981f78",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "467520a4-c1e4-49a2-98d7-6d0e1fca4b7c",
          content:
            "helping a fren to post. anyone wanna swap HE191? his index is 10497.",
          student_id: "fb1bbcfd-548d-4ddc-a0a1-0624d6424d3f",
          forum_id: "95c879c4-808d-4a74-93f4-270ec0981f78",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "eac14e9a-f794-450a-b2ba-457934058198",
          content: "Why so diff to get an MAS801",
          student_id: "74a15016-9dd0-4bf7-bc63-96a1181fc254",
          forum_id: "49ba546c-6d03-48b0-bd0d-f6253d2e185b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0127cb18-cc1a-44fb-9b98-31e197711639",
          content:
            "any biz student with AB214 index 00269 wanna switch with index 00268?? and also any biz student letting go of their BF322 pls let mi knwo too thanks!!!",
          student_id: "b41c02f5-cae6-47fb-96de-08a87011bc85",
          forum_id: "49ba546c-6d03-48b0-bd0d-f6253d2e185b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "138371bf-3017-465e-8829-6bb6797c664d",
          content:
            "Any ACC student wanna change index? I want change my AA101 00014 to 00011 or 00013 thanx",
          student_id: "74940d25-c418-4c34-9915-a9ad1452aabb",
          forum_id: "49ba546c-6d03-48b0-bd0d-f6253d2e185b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "417aa7eb-30ee-4a64-88c7-7d7ae7d289f5",
          content:
            "Hey, I am Looking to swap for these following indexes. Wants: CSC105-10431 CSC106-10432 CSC201-10433 CSC207-10435 Has: CSC105-10355 CSC106-10356 I didn't registered for CSC201 and 207 but will be willing to kope available slots for add/drop period if possible. Thanks in advance!",
          student_id: "1a7c0323-7b46-4c5d-ad94-776ad5fc2841",
          forum_id: "fc7aae16-91d7-4603-81e8-d12d5e179b15",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "e5ef7bc2-704a-4663-9537-0dfce3e04d2e",
          content:
            "hi there, i'm looking to index swap MB101 currently has 00679 looking for 00673 or 00675 or 00676 or 00680 *If you are willing to swap or drop, please sms me @ 94567137, we can negotiate :) Thanks!!",
          student_id: "ecd79eeb-cf33-4c48-a0d3-3162a52b7ff1",
          forum_id: "fc7aae16-91d7-4603-81e8-d12d5e179b15",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "59b9241c-a6f5-4ecb-b801-7f8e251f366e",
          content:
            "I have CM101 and EE8089, willing to swap either for HMJ1 index: 20064, 20065, 20066 or 20067 PM me or sms @ nine triple-1 4 double-9 3",
          student_id: "adec7416-ee7b-48d2-9db7-d027edd39456",
          forum_id: "fc7aae16-91d7-4603-81e8-d12d5e179b15",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9a13ef1e-6c40-4602-ae5a-e42ee0a10bec",
          content:
            "Electives swap! Looking to swap EE8084 for HS815/HP803 Pm or sms at 9 zero 9 zero 66 one 6",
          student_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          forum_id: "80c33f65-9c14-4f21-a0f6-6fb63e4231f1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "4bd7f927-1fa9-415c-a26a-db6330ff00d3",
          content:
            "Here is mine..HE191 Principles of Econs 58025 MB101 Accounting 00584 Hope to change for another elective..",
          student_id: "0dd90cc1-0cf8-4a60-9b42-ac049d7fbb1c",
          forum_id: "80c33f65-9c14-4f21-a0f6-6fb63e4231f1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c2305f10-09b7-486f-8284-114a39f0d871",
          content:
            "I have HP802, I would trade if you have a module that I interested in. I have CS119 as well.",
          student_id: "58bf2a16-c503-4cc1-9ad2-cdef6f79e8ea",
          forum_id: "80c33f65-9c14-4f21-a0f6-6fb63e4231f1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "dcc71e6c-1e66-48e8-a52b-1b85c232dea6",
          content: "I have CS803-Media in America",
          student_id: "0a1c02d1-b4a1-4e2c-ad65-db36ad66d099",
          forum_id: "aa7c7401-00bf-47c1-a5f1-877239524720",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "0d192cc3-c0e5-4eef-88b6-80761f9f028e",
          content:
            "Hi people, I have GV11. Looking to swap for COM254 or ADM280.",
          student_id: "fd53bcb5-da89-430e-986f-f77f9ab0bba1",
          forum_id: "aa7c7401-00bf-47c1-a5f1-877239524720",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9350ac0d-7743-4739-a470-bd28272b4975",
          content:
            "looking for people to swap cpe207 index 10263 with my 10262.",
          student_id: "64fea059-7d74-426b-a853-75c25cccb96e",
          forum_id: "aa7c7401-00bf-47c1-a5f1-877239524720",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "5cfecc2e-82f4-462b-b8fb-70e18718fba9",
          content:
            "i have mb101 00676. who wants to swap? looking for mb101 00674 00672 or HP806 HP803",
          student_id: "80fd60d1-8fa6-4ad4-985a-832b273189b7",
          forum_id: "819ed7f2-d90d-4afb-a661-901ede58789c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9fe92319-4c20-4e88-a290-2b7f5dda38cd",
          content: "anyone wants to drop hp801,cs100,cs119,hs811?thanks",
          student_id: "d0fd91f9-6013-4047-9269-c42705de1702",
          forum_id: "819ed7f2-d90d-4afb-a661-901ede58789c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "99bd5498-3b60-48be-add8-84151db0feaa",
          content:
            "CSC207 Have: 10425 Want: 10483 PM me or quick reply me thks....",
          student_id: "19fc8b42-618d-4051-8535-6ce93add022a",
          forum_id: "819ed7f2-d90d-4afb-a661-901ede58789c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "1583371c-c9b2-4bb2-9837-8195361584a6",
          content:
            "has anyone taken cpe 802?wats e grading format lyk?got projects and presentation?thx",
          student_id: "0804b366-c010-408b-a2e5-bb8054292604",
          forum_id: "739c18ef-4281-4751-943c-45a8efbfbcc8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "2037ed7a-3320-42e7-bf65-e30a132d7c5f",
          content:
            "I might want to drop MB106 00533.PM me and we can work something out!",
          student_id: "cb969818-4870-470d-a186-874c0da33126",
          forum_id: "739c18ef-4281-4751-943c-45a8efbfbcc8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f00a0f87-d54f-4934-a9d7-4c3d06a4a989",
          content:
            "posting on my friend's behalf, looking for people with MB101(00673) or HC805 (17679)..she got HS815(17371)~",
          student_id: "59c55c73-a7f7-4f7d-bf6a-f9146fb7d46f",
          forum_id: "739c18ef-4281-4751-943c-45a8efbfbcc8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3a3ec109-7c64-4139-bc6b-8b0be56281d8",
          content:
            "anyone dropping cbc801, hp803, hp806, aaa181, hs811?? can let me noe if anyone of u dropping?? really desperately looking for an elective.. thanks alot!!",
          student_id: "777ae29f-b7e8-4f3d-95a7-cbb5a84e3c25",
          forum_id: "fef6150f-8634-44c2-85a5-a6523db57cbf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "1a9516ef-775b-4365-9c06-1b91ad44551d",
          content: "who wanna swap AAU280 59414 for 39412??",
          student_id: "1cd38b82-154e-4b21-bdef-692dcdba69e4",
          forum_id: "fef6150f-8634-44c2-85a5-a6523db57cbf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3046e0bc-0645-4a3c-8f55-cae4931eede1",
          content:
            "I have CS119 and HS815. Looking for EE8086 / HS811 / HP801 / HP806 / BS803. Thanks.",
          student_id: "09b4d184-0025-4fdd-91e2-daceaa806e21",
          forum_id: "fef6150f-8634-44c2-85a5-a6523db57cbf",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c42117d2-de3c-4d01-a6f5-e6a07e19322e",
          content:
            "Its not new just that i didn't know CBC801 also became a module people willing to pay. In the past it was mostly HP803 and HP801, saw prices up to $100 or $150 before on public folders. Thats how desperate some people are for them.",
          student_id: "f731e60c-bd8c-48a2-bc4d-7566ccb8066f",
          forum_id: "6bda1533-514c-4f01-94e9-c8e0a7cee10e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "59f92199-87b3-4aab-a251-be9315daa985",
          content:
            "I have HS815 (17371). Looking for MB101 (00673), HC805 (17679). Anyone wish to exchange?",
          student_id: "277ff1a4-fb76-48b9-a0e8-579192b001e8",
          forum_id: "6bda1533-514c-4f01-94e9-c8e0a7cee10e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "acb7e331-e634-4cca-9a49-9a0ddcea706f",
          content: "anyone dropping HMK1 20101? pm me please, thank you!!",
          student_id: "a9f39e6f-8a67-4f4c-a8e4-c0d704b8f066",
          forum_id: "6bda1533-514c-4f01-94e9-c8e0a7cee10e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "d12bd05a-339a-4a8b-a960-98d4d1d699e2",
          content:
            "i got CV8801 and EE8087, want to swap for EE8086 or NIE elective provided that it can fit my timetable. willing to pay(nego), pm if you are willing to swap.",
          student_id: "194b2453-ca11-4aa6-8da4-26fcda418650",
          forum_id: "3417aa35-8b3e-4eae-9435-89466042e504",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "99710f29-6b3d-43e8-8846-fad4ecd12aa9",
          content:
            "I got AED380 (39511). Its NIE course, motivating pupils to learn. sure pass want. No exams, only written essay and group presentation. The group work is together with NIE students, so no prob adapting. I am not good at talking, so could like to swap. Mainly I want EE or ADM modules like the following: Astronomy 35014 Studies in World Cinema 64176 Biobiz, Biology in Business 08677 Digital Darkroom 64107 Working in the 21st Century 17283 Can PM me if anyone want NIE module and can offer another module.",
          student_id: "f99bd4e8-6afd-43e4-ab31-3645b5e63ee6",
          forum_id: "3417aa35-8b3e-4eae-9435-89466042e504",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "8bdbe054-1113-4f78-9fc7-4e521a4667ae",
          content:
            "update. have MB103 INDEX 00741 as well as HMG1(GERMAN) 20042 to exchange for EE8086 ASTRO. Also have MB101 INDEX 00672 to swap index with.",
          student_id: "436eb562-d40d-4a83-a39e-103d42383486",
          forum_id: "3417aa35-8b3e-4eae-9435-89466042e504",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "42a1890f-6b9e-4b21-9b36-5e2c8f29e85d",
          content:
            "Hi, Anyone want to swop MB101 Accountancy 00675 for any of the following? MB106: 00528/ 00529 MB102: 00691/ 00692 MB107: 00702/ 00703/ 00704/ 00705/ 00706/ 00707/ 00708/ 00709 If you are interested, kindly msg me. Thanks!",
          student_id: "ae10ff48-b314-41d4-bcbc-f8636cf5894b",
          forum_id: "59f89cd7-cd45-4610-bb35-4d02f2bd6a93",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "17151fe1-945f-43e1-a21c-fddfeee5e4ed",
          content:
            "Hi, I have mb107 index 00702, want to change to 00710.. and I'd like to have either HMJ1 (20067) or HMS1 (20135) Anyone want s to swap index mb107, or intend to drop the language courses, please let me know via pm. Thanks a bunch ",
          student_id: "64b86e2a-d3f3-41c9-af86-77896e50dbfb",
          forum_id: "59f89cd7-cd45-4610-bb35-4d02f2bd6a93",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3c906819-a8e4-425d-aa4d-25b558e5c63f",
          content:
            "anyone interested in cyber security EE8084? let me know what u have for swapping. drop me an email at duataotan@gmail.com to discuss. thanks!",
          student_id: "05c9f8fb-5029-4c86-ad15-122be164ec29",
          forum_id: "59f89cd7-cd45-4610-bb35-4d02f2bd6a93",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "3a03b1a6-9ebc-4bb6-b1f7-2fdbaddf2162",
          content:
            "i got jap lvl 1 but i intend to exchange only. You have got AAA280? send a private msg to me",
          student_id: "96410313-dda5-4d7e-9479-10b132b25b26",
          forum_id: "9e37d651-3c78-4e72-b94c-2c5e2b20fcb8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "4b7508ae-4e67-44f0-aec8-e11bcdfd3e5a",
          content:
            "I have got Jap lvl 1 , CBC 100 and CS100. anyone wannaexchange for AAA 280? if you want neither of these, im willing to pay. PM me. thanks",
          student_id: "4f52c2cb-2d28-4102-93b0-b19f5ec868f0",
          forum_id: "9e37d651-3c78-4e72-b94c-2c5e2b20fcb8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "786ed85b-d7c6-428c-bb86-ee68596cf1dd",
          content:
            "Hi, what index no is ur mb107? I desperately need to swap (i have 00708, need 00700 or 00710) so i can retake my core mod. do let me know thank you!",
          student_id: "b93da414-51a1-4261-8abd-0cc7bf0951fa",
          forum_id: "9e37d651-3c78-4e72-b94c-2c5e2b20fcb8",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c9dfc7ef-1455-4694-a5d2-dc06f0bb8d88",
          content:
            "hi all i have bs803 for exchange. hope to exchange because the exam date very near to my other exam. for bs803, basically u just go into the lecture and watch videos, exam format will be 100% mcq. no assignment no mid term. anyone has cbc801 for exchange? hopefully those who have gone for cbc801 can share the course outline/content and assessment format. Thanks a lot!!! I can be reached at duataotan@gmail.com pls email me as i seldom come in to hwz. thanks again.",
          student_id: "ec0f3c32-6ae1-4f1c-aa73-bde659329a0f",
          forum_id: "ddc0fea5-370a-4fdc-bb24-658f74e3d5c6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "4ce81047-f562-40e4-a1c4-7034dab62a8f",
          content:
            "I have adm350 (non-examinable, watch movies every week).Looking for int240/int275/pho210/pho220. Anyone has them or any other ahss-gerpe, pls sms to 96691306.",
          student_id: "71f20e3e-5c91-4321-b428-99887eea9fe6",
          forum_id: "ddc0fea5-370a-4fdc-bb24-658f74e3d5c6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "9a013940-085a-4e0f-af16-ea46da5a020e",
          content:
            "i is got MB101 00677, looking to swap with any GER-AHSS or GER-BM, pls tell me your index no.",
          student_id: "799555ce-436b-4402-9d85-6670d54c1c8f",
          forum_id: "ddc0fea5-370a-4fdc-bb24-658f74e3d5c6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "bc052531-09c0-48e9-bcb4-cb11586fff0a",
          content:
            "Anyone need HL815 (17439)? I don't like acting.. wanna swap with any GER-AHSS",
          student_id: "70134ecf-bd5b-45d0-aca2-d780b5480cd1",
          forum_id: "79275d5d-ed12-44c0-8307-8252f11715f9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "a4480ab3-5315-42db-8c36-184a9442c6ae",
          content:
            "it is 50% essay as well as 50% final exam you will be watching movies, plays, theatre and stuff, in fact next lesson part of the matrix will be screened. the essay question will be given quite early in the first few lectures and you will be given quite some time to prepare. preparation is done using materials from the past few lectures and then you hand it up. Not too bad, as the lecturer understands that it is very new to everyone. My friend had an A for his essay, but he made a mistake and SU in the end, due to time constraints i guess. the exam will be 2 groups of questions and you choose one group of 2-3 sub questions to do. before that, the lecturer would already have given you what are the important points for each question which are acutually every lecture. so you just have to prepare yourself and do the paper. i did not get this module as it clashed with my core, but i'm hoping to get it next sem.",
          student_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
          forum_id: "79275d5d-ed12-44c0-8307-8252f11715f9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "469335d8-0f34-492c-8832-51ba23aab139",
          content:
            "hi! i got MB107 (wed tutorial and fri lec) and ADM330(thurs lec ONLY)..anyone wana exchange for cbc801 or hp804 ? =)",
          student_id: "22252fc1-ca47-4e93-b26c-d52ba74e26c6",
          forum_id: "79275d5d-ed12-44c0-8307-8252f11715f9",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "b9c974ac-1ce4-4b67-bc9c-4b97a77de912",
          content:
            "Currently, i have HS815 for exchange. Looking for HP803, HP806, MB101 (00673), HC805.",
          student_id: "11fd8110-1000-4f43-818b-2a940c5ae1a7",
          forum_id: "f23cde5b-cc01-4e67-a7b2-3e1026a5fb1e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f288e271-ec21-4d2a-801c-a3579b6f0d5d",
          content:
            "I currently have IC0204 Intro to Software Eng. I am hoping someone will swap EE8084 with me. Anybody interested please PM or email me at rambutan240@hotmail.com. Thanks alot.",
          student_id: "ab27eb29-bfa5-41f8-adbd-f422587936bd",
          forum_id: "f23cde5b-cc01-4e67-a7b2-3e1026a5fb1e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f9e16a83-9842-4157-a31d-438138eca992",
          content:
            "Desperately looking for cs100, will trade for mb 103 or 107 or lit modules or $ PLEASE",
          student_id: "73824e09-b626-4eb1-86b0-7ca5bd5fe159",
          forum_id: "f23cde5b-cc01-4e67-a7b2-3e1026a5fb1e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "db8d49a6-5ec1-4605-ae04-be2b0a6334cd",
          content:
            "i currently have MB101 accounting index 00678 (tutorial on friday). anyone has 00670 or 00679 for swap? pls sms me at 90216080. many thanks in advance!",
          student_id: "b17dfe4b-09ec-48f7-8cec-f1f652ca34d7",
          forum_id: "44d126e6-0ba8-45c4-8757-d5df8d90f82a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f4cf9b8c-4e1e-4e47-9a19-5bf5f9fde3b2",
          content:
            "i have INT240 INTERACTIVE PUBLIC ART AND MEDIA. Pls pm me if you have any module you like to swap with.",
          student_id: "f530c66e-8028-4fd5-ab1a-045d5068576d",
          forum_id: "44d126e6-0ba8-45c4-8757-d5df8d90f82a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "1657bf68-278a-4fac-9db7-62b576901f49",
          content:
            "I have CS100 wanna swap with HP801. Please contact me at 90818802 if interested. Thanks a advance.",
          student_id: "200adddd-f6dc-4219-afa8-b0e45021e33a",
          forum_id: "44d126e6-0ba8-45c4-8757-d5df8d90f82a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f49baaac-a85b-4848-982f-c18112c2a97a",
          content:
            "currently i have he191 economics (50157) which is on fri 11.30. would like to swap for 50138, 50139, 50152, 50155 pls email me at moonspunlove@gmail.com thanks!",
          student_id: "bd7442fb-53b7-4606-a54e-66b2182f4563",
          forum_id: "85339ff6-75f2-4e66-9440-07f5edd7de1b",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "7c9b45a4-b9d1-4f46-8ff4-3474a3dd446c",
          content:
            "Wanna swap HP802 Working In 21st Century (17176)wed with anything else on the same slot .",
          student_id: "45e0353e-54d1-42a9-a9a0-c93380680b43",
          forum_id: "85339ff6-75f2-4e66-9440-07f5edd7de1b",
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
