var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequire4c75=r);var a=r("kEUo3");const n=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};lOCALSTORAGE_KEY="feedback-form-state";const l=document.querySelector(".feedback-form");!function(){const e=n("feedback-form-state");e&&Object.entries(e).forEach((([e,t])=>{l.elements[e].value=t}))}();l.addEventListener("input",a._.throttle((e=>{let t=n("feedback-form-state");t=t||{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.addEventListener("submit",(e=>{e.preventDefault();const t=n("feedback-form-state");t?(console.log(t),Object.keys(t).forEach((e=>{l.elements[e].value=""})),localStorage.removeItem("feedback-form-state")):console.log("object 'feedback-form-state' in storage is already removed")}));
//# sourceMappingURL=03-feedback.a4c792c0.js.map
