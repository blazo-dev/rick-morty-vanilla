import { createHomePage } from "../utils/create-home-page.js";
import { $ } from "../utils/dom-elemets-selector.js";

export const createPagination = (page: number, pages: number): HTMLElement => {
  const paginationTemplate = $("#pagination-template") as HTMLTemplateElement;
  const { content } = paginationTemplate;

  const pagination = content.cloneNode(true) as HTMLElement;

  const paginationPrev = pagination.querySelector(
    "[data-pagination-prev]"
  ) as HTMLButtonElement;
  const paginationNext = pagination.querySelector(
    "[data-pagination-next]"
  ) as HTMLButtonElement;
  const paginationFirstPage = pagination.querySelector(
    "[data-pagination-first-page]"
  ) as HTMLButtonElement;
  const paginationLastPage = pagination.querySelector(
    "[data-pagination-last-page]"
  ) as HTMLButtonElement;
  const paginationPage = pagination.querySelector(
    "[data-pagination-page]"
  ) as HTMLSpanElement;

  paginationPrev.disabled = page === 1;
  paginationNext.disabled = page === pages;
  paginationFirstPage.disabled = page === 1;
  paginationLastPage.disabled = page === pages;
  if (page === 1)
    paginationFirstPage.classList.add("pagination__button--active");

  if (page === pages)
    paginationLastPage.classList.add("pagination__button--active");

  paginationLastPage.textContent = pages.toString();
  paginationPage.textContent = page.toString();

  paginationPrev.addEventListener("click", () => {
    paginationPrev.disabled = true;
    createHomePage(page - 1);
  });

  paginationNext.addEventListener("click", () => {
    paginationNext.disabled = true;
    createHomePage(page + 1);
  });

  paginationFirstPage.addEventListener("click", () => {
    paginationFirstPage.disabled = true;
    createHomePage(1);
  });

  paginationLastPage.addEventListener("click", () => {
    paginationLastPage.disabled = true;
    createHomePage(pages);
  });

  return pagination;
};
