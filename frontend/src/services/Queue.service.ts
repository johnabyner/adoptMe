//generic type
export class Queue<T> {
  private elements: T[] = [];

  enqueue(item: T): void {
    this.elements.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.elements.shift();
  }

  peek(): T | undefined {
    return this.elements[0];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}   