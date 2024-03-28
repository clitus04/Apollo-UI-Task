export type Member = {
  id: number;
  name: string;
  image: string;
};

export const members = [
  {
    id: 0,
    name: "Asiya Javayant",
    image: "https://apollo.primereact.org/demo/images/avatar/asiyajavayant.png",
  },
  {
    id: 1,
    name: "Amyelsner",
    image: "https://apollo.primereact.org/demo/images/avatar/amyelsner.png",
  },
  {
    id: 2,
    name: "Ioni Bowcher",
    image: "https://apollo.primereact.org/demo/images/avatar/ionibowcher.png",
  },
  {
    id: 3,
    name: "Onyama Limba",
    image: "https://apollo.primereact.org/demo/images/avatar/onyamalimba.png",
  },
  {
    id: 4,
    name: "Ivan Magalhaes",
    image: "https://apollo.primereact.org/demo/images/avatar/ivanmagalhaes.png",
  },
];

export type Task = {
  id: number;
  name: string;
  comments: number;
  attachments: number;
  date: string;
  members: Member[];
  completed: boolean;
};

export const defaultTask: Task[] = [
  {
    id: 0,
    name: "Create a New Landing UI",
    comments: 2,
    attachments: 2,
    date: "13 May",
    members: [
      {
        id: 0,
        name: "Asiya Javayant",
        image:
          "https://apollo.primereact.org/demo/images/avatar/asiyajavayant.png",
      },
      {
        id: 1,
        name: "Amyelsner",
        image: "https://apollo.primereact.org/demo/images/avatar/amyelsner.png",
      },
      {
        id: 2,
        name: "Ioni Bowcher",
        image:
          "https://apollo.primereact.org/demo/images/avatar/ionibowcher.png",
      },
    ],
    completed: true,
  },
  {
    id: 1,
    name: "Create a New Landing UI",
    comments: 2,
    attachments: 2,
    date: "13 May",
    members: [
      {
        id: 0,
        name: "Asiya Javayant",
        image:
          "https://apollo.primereact.org/demo/images/avatar/asiyajavayant.png",
      },
      {
        id: 1,
        name: "Amyelsner",
        image: "https://apollo.primereact.org/demo/images/avatar/amyelsner.png",
      },
      {
        id: 2,
        name: "Ioni Bowcher",
        image:
          "https://apollo.primereact.org/demo/images/avatar/ionibowcher.png",
      },
    ],
    completed: true,
  },
  {
    id: 2,
    name: "Create a New Landing UI",
    comments: 2,
    attachments: 2,
    date: "13 May",
    members: [
      {
        id: 0,
        name: "Asiya Javayant",
        image:
          "https://apollo.primereact.org/demo/images/avatar/asiyajavayant.png",
      },
      {
        id: 1,
        name: "Amyelsner",
        image: "https://apollo.primereact.org/demo/images/avatar/amyelsner.png",
      },
    ],
    completed: false,
  },
  {
    id: 3,
    name: "Create a New Landing UI",
    comments: 2,
    attachments: 2,
    date: "13 May",
    members: [
      {
        id: 0,
        name: "Asiya Javayant",
        image:
          "https://apollo.primereact.org/demo/images/avatar/asiyajavayant.png",
      },
      {
        id: 1,
        name: "Amyelsner",
        image: "https://apollo.primereact.org/demo/images/avatar/amyelsner.png",
      },
      {
        id: 2,
        name: "Ioni Bowcher",
        image:
          "https://apollo.primereact.org/demo/images/avatar/ionibowcher.png",
      },
    ],
    completed: true,
  },
];
