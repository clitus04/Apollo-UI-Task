export type StorageDetails = {
  files: number;
  progress: number;
  storage: number;
  title: string;
};

export const storageDetails: StorageDetails[] = [
  {
    files: 412,
    progress: 30,
    storage: 1.5,
    title: "Cloud Storage",
  },
  {
    files: 412,
    progress: 30,
    storage: 1.5,
    title: "Dropbox Storage",
  },
  {
    files: 412,
    progress: 30,
    storage: 1.5,
    title: "Google Drive Storage",
  },
  {
    files: 412,
    progress: 30,
    storage: 1.5,
    title: "Internal Storage",
  },
];

export type Categories = {
  icon: string;
  name: string;
  count: number;
};

export const categories: Categories[] = [
  {
    icon: "pi pi-image",
    name: "Images",
    count: 85,
  },
  {
    icon: "pi pi-file",
    name: "Documents",
    count: 231,
  },
  {
    icon: "pi pi-video",
    name: "Videos",
    count: 40,
  },
];

export type Folders = {
  icon: string;
  name: string;
  count: number;
};

export const folders: Folders[] = [
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
  {
    icon: "pi pi-folder",
    name: "Prototype",
    count: 85,
  },
];

export type Uploads = {
  id: number;
  name: string;
  date: string;
  fileSize: string;
  status: "INSTOCK";
};

export const uploads: Uploads[] = [
  {
    id: 0,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 1,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 2,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 3,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 4,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 5,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 6,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
  {
    id: 7,
    name: "nature.jpg",
    date: "29 Jul 2023",
    fileSize: "12 MB",
    status: "INSTOCK",
  },
];
