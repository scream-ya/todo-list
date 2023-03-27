/* eslint-disable max-classes-per-file */
import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';

interface ItemDataProps {
  text?: string,
  isDone?: boolean,
  isPriorityHigh?: boolean,
  isNew?: boolean,
}

export class Item {
  id: string;
  text: string;
  isDone: boolean;
  isPriorityHigh: boolean;
  isNew: boolean;

  constructor(data: ItemDataProps = {}) {
    this.id = uuid();
    this.text = data.text ?? '';
    this.isDone = data.isDone ?? false;
    this.isPriorityHigh = data.isPriorityHigh ?? false;
    this.isNew = data.isNew ?? true;

    makeAutoObservable(this);
  }

  editTodo(data: ItemDataProps) {
    const [field, value] = Object.entries(data)[0];

    // @ts-ignore
    this[field] = value;
    this.isNew = false;
  }
}

export class Store {
  data: Array<Item> = [
    new Item({ text: 'todo 1', isNew: false }),
    new Item({ text: 'todo 2', isNew: false, isPriorityHigh: true }),
    new Item({ text: 'todo 3', isNew: false, isDone: true }),
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    if (this.data[this.data.length - 1].isNew === false) {
      this.data.push(new Item());
    }
  }

  deleteTodo(id: string) {
    const idx = this.data.findIndex((item) => item.id === id);
    this.data.splice(idx, 1);
  }
}

const store = new Store();

export const storeContext = createContext(store);
export const useStore = () => useContext(storeContext);
