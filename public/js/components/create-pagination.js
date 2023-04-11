import { createHomePage } from "./create-home-page.js";
import { $ } from "../utils/dom-elemets-selector.js";
export const createPagination = (page, pages) => {
    const paginationTemplate = $("#pagination-template");
    const { content } = paginationTemplate;
    const pagination = content.cloneNode(true);
    const paginationPrev = pagination.querySelector("[data-pagination-prev]");
    const paginationNext = pagination.querySelector("[data-pagination-next]");
    const paginationFirstPage = pagination.querySelector("[data-pagination-first-page]");
    const paginationLastPage = pagination.querySelector("[data-pagination-last-page]");
    const paginationPage = pagination.querySelector("[data-pagination-page]");
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
