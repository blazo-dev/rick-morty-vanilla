export const $ = (selector: string): Element | NodeListOf<Element>  => {
  const elements: NodeListOf<Element> | null =
    document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
