interface IMenuItem {
  name: string;
  link: string;
};

export interface IMenu {
  [index: number]: IMenuItem;
}