function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,u=setTimeout(O,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function O(){var e=p();if(j(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function T(e){return u=void 0,g&&o?y(e):(o=i=void 0,a)}function h(){var e=p(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(p())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form"),inputMail:document.querySelector(".feedback-form input"),inputMessage:document.querySelector(".feedback-form textarea")};y.form.addEventListener("input",e(t)((function(e){const t={email:y.inputMail.value,message:y.inputMessage.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.form.addEventListener("submit",(function(e){const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(n)})),function(e){const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);n&&(y.inputMail.value=n.email,y.inputMessage.value=n.message)}();
//# sourceMappingURL=03-feedback.120b930b.js.map