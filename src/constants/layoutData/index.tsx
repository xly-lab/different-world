const menuData = [
  {
    title: "html",
    key: "html",
    children: [
      { title: "leaf 0-0", key: "/story", isLeaf: true },
      { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
    ],
  },
  {
    title: "css",
    key: "css",
    children: [
      { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
      { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
    ],
  },
  {
    title: "js",
    key: "js",
    children: [
      { title: "leaf 2-0", key: "0-2-0", isLeaf: true },
      { title: "leaf 2-1", key: "0-2-1", isLeaf: true },
    ],
  },
  {
    title: "react",
    key: "react",
    children: [
      { title: "leaf 3-0", key: "0-3-0", isLeaf: true },
      { title: "leaf 3-1", key: "0-3-1", isLeaf: true },
    ],
  },
];

const layoutData = { menuData };

export default layoutData;
