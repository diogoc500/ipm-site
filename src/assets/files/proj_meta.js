export const proj_profiles = [
  {
    name: "Diogo Costa",
    id: "dc",
    number: 59893,
    img: require("./members/diogo_costa/costa_profile.jpeg"),
  },
  {
    name: "Diogo Lemos",
    id: "dl",
    number: 56837,
    img: require("./members/diogo_lemos/diogo_lemos_profile.jpg"),
  },
  {
    name: "Project",
    id: "prj",
    number: "23/24",
    img: require("./project_files/logo_temp.png"),
  },
  {
    name: "José Trigueiro",
    id: "jt",
    number: 58119,
    img: require("./members/jose_trigueiro/jose_profile.jpg"),
  },
  {
    name: "Tomás Gabriel",
    id: "tg",
    number: 60722,
    img: require("./members/tomas_gabriel/pina_profile.jpeg"),
  },
];

export const proj_files = [
  {
    id: "dc",
    files: [],
  },
  {
    id: "dl",
    files: [],
  },
  {
    id: "jt",
    files: [],
  },
  {
    id: "tg",
    files: [
      {
      name: "Assignment 1",
      file: require("./members/tomas_gabriel/assign_1.pdf"),
    },
  ],
  },
  {
    id: "prj",
    files: [
      {
        name: "G_10_stage1",
        file: require("./project_files/G_10_stage1.pdf"),
      },
      {
        name: "G_10_stage2",
        file: require("./project_files/G_10_stage2.pdf"),
      },
    ],
  },
];
