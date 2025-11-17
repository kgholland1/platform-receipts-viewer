declare module 'bootstrap' {
  export class Offcanvas {
    constructor(element: HTMLElement, options?: Partial<Offcanvas.Options>);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Offcanvas | null;
    static getOrCreateInstance(element: HTMLElement, options?: Partial<Offcanvas.Options>): Offcanvas;
  }

  export namespace Offcanvas {
    interface Options {
      backdrop: boolean | 'static';
      keyboard: boolean;
      scroll: boolean;
    }
  }

  // Add other Bootstrap components as needed
  export class Modal {
    constructor(element: HTMLElement, options?: any);
    show(): void;
    hide(): void;
    toggle(): void;
    dispose(): void;
    static getInstance(element: HTMLElement): Modal | null;
  }

  // ... other components
}