const copyrightYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

copyrightYear.innerHTML = `` + new Date().getFullYear();
lastModified.innerHTML = `Last Modification: ` + document.lastModified;