"use strict";
(self["webpackChunkpokedex"] = self["webpackChunkpokedex"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: '',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then(p => p.PagesModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'pokedex';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






//Modules
//Components
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 6547:
/*!****************************************************!*\
  !*** ./src/app/pages/details/details.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_poke_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/poke-api.service */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/poke-header/poke-header.component */ 5825);






function DetailsComponent_ng_template_2_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r3.stat.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r3.base_stat, " ");
  }
}
const _c0 = function () {
  return [""];
};
function DetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 2)(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "article", 7)(8, "section")(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Estat\u00EDsticas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DetailsComponent_ng_template_2_li_12_Template, 4, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Voltar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pokemon[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.pokemon[1].names[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.pokemon[0].sprites.other.dream_world.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r0.pokemon[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.pokemon[0].stats);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
  }
}
function DetailsComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
  }
}
class DetailsComponent {
  constructor(activatedRouter, pokeApiService) {
    this.activatedRouter = activatedRouter;
    this.pokeApiService = pokeApiService;
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
    this.urlName = 'https://pokeapi.co/api/v2/pokemon-species';
    this.isLoading = false;
    this.apiError = false;
  }
  ngOnInit() {
    this.getPokemon;
    console.log(this.getPokemon);
  }
  get getPokemon() {
    const id = this.activatedRouter.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemon(`${this.urlName}/${id}`);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([pokemon, name]).subscribe({
      next: result => {
        this.pokemon = result;
        this.isLoading = true;
      },
      error: err => {
        console.log(err);
        this.apiError = true;
      }
    });
  }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
  return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_poke_api_service__WEBPACK_IMPORTED_MODULE_0__.PokeApiService));
};
DetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DetailsComponent,
  selectors: [["app-details"]],
  decls: 4,
  vars: 2,
  consts: [[3, "ngIf"], ["src", "assets/error.png", "alt", "Deu erro na mostragem do pokemon", "width", "100%", 4, "ngIf"], [1, "pokemon__names"], [1, "slideInLeft"], [1, "slideInRight"], [1, "pokemon__status"], [1, "slideInDown", 3, "src", "alt"], [1, "pokemon__status__statistics", "fadeIn"], [4, "ngFor", "ngForOf"], [1, "btn", "btn__secondary", 3, "routerLink"], ["src", "assets/error.png", "alt", "Deu erro na mostragem do pokemon", "width", "100%"]],
  template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "poke-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailsComponent_ng_template_2_Template, 15, 7, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DetailsComponent_img_3_Template, 1, 0, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.apiError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_1__.PokeHeaderComponent],
  styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  height: 75px;\n  padding: 0 1.875rem;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--branco);\n  font-size: 2rem;\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 100;\n  top: 0;\n  font-size: 3.75rem;\n  color: rgba(255, 255, 255, 0.1);\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  animation-fill-mode: none !important;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5.625rem;\n  left: 1.875rem;\n  max-width: 8.125rem;\n  z-index: 10;\n  animation-fill-mode: none !important;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status__statistics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: var(--branco);\n  min-height: 43.9vh;\n  margin-top: 0.625rem;\n  padding: 6.875rem 2.1875rem 1.875rem;\n  border-radius: 3.125rem 3.125rem 0 0;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status__statistics[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: rem-calc 20;\n  font-weight: 700;\n  font-style: italic;\n  font-size: 2rem;\n  text-decoration: underline;\n  color: var(--secondary-color);\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status__statistics[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.125rem;\n  line-height: 130%;\n}\n@media (max-width: 420px) {\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n    margin-top: 0.625rem;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__names[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    top: 2.1875rem;\n    font-size: 1.25rem;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -5rem;\n    left: 0rem;\n    max-width: 6.25rem;\n  }\n  [_nghost-%COMP%]   main[_ngcontent-%COMP%]   .pokemon__status__statistics[_ngcontent-%COMP%] {\n    min-height: 57vh;\n    padding-top: 3.125rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vQ3Vyc29fZGVfQW5ndWxhciUyMDJfdjE1L3Bva2VkZXgvc3JjL2FwcC9wYWdlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0M7RUFDQyxrQkFBQTtBQ0ZGO0FESUU7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUVBLG1CQUFBO0FDSkg7QURNRztFQUNDLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDSko7QURPRztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0xKO0FEUUc7O0VBSUMsb0NBQUE7QUNQSjtBRFdFO0VBQ0Msa0JBQUE7QUNUSDtBRFdHO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUlBLG9DQUFBO0FDWEo7QURjRztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEseUJBQUE7RUFFQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQ2ZKO0FEaUJJO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNmTDtBRG1CSztFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUNsQk47QUR3QkU7RUFwRkQ7SUFxRkUsb0JBQUE7RUNyQkQ7RUR3QkU7SUFDQyxrQkFBQTtFQ3RCSDtFRHlCRTtJQUNDLGNBQUE7SUFDQSxrQkFBQTtFQ3ZCSDtFRDJCQztJQUNDLGtCQUFBO0VDekJGO0VEMkJFO0lBQ0Msa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDekJIO0VENEJFO0lBQ0MsZ0JBQUE7SUFDQSxxQkFBQTtFQzFCSDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29uZmlnLXNjc3MvcmVtLWNhbGMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcblx0bWFpbiB7XHJcblx0XHRtYXJnaW4tdG9wOiByZW0tY2FsYyg0MCk7XHJcblxyXG5cdFx0LnBva2Vtb25fX25hbWVzIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG5cdFx0XHRoZWlnaHQ6IDc1cHg7XHJcblxyXG5cdFx0XHRwYWRkaW5nOiAwIHJlbS1jYWxjKDMwKTtcclxuXHJcblx0XHRcdGgxIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tYnJhbmNvKTtcclxuXHRcdFx0XHRmb250LXNpemU6IHJlbS1jYWxjKDMyKTtcclxuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogMTAwO1xyXG5cdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRmb250LXNpemU6IHJlbS1jYWxjKDYwKTtcclxuXHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMSxcclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdC8vUmVtb3ZlIEJ1ZyBBbmltYXRpb25cclxuXHRcdFx0XHQtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQucG9rZW1vbl9fc3RhdHVzIHtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiByZW0tY2FsYygtOTApO1xyXG5cdFx0XHRcdGxlZnQ6IHJlbS1jYWxjKDMwKTtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IHJlbS1jYWxjKDEzMCk7XHJcblx0XHRcdFx0ei1pbmRleDoxMDtcclxuXHJcblx0XHRcdFx0Ly9SZW1vdmUgQnVnIEFuaW1hdGlvblxyXG5cdFx0XHRcdC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jl9fc3RhdGlzdGljcyB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tYnJhbmNvKTtcclxuXHJcblx0XHRcdFx0bWluLWhlaWdodDogNDMuOXZoO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IHJlbS1jYWxjKDEwKTtcclxuXHJcblx0XHRcdFx0cGFkZGluZzogcmVtLWNhbGMoMTEwKSByZW0tY2FsYygzNSkgcmVtLWNhbGMoMzApO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IHJlbS1jYWxjKDUwKSByZW0tY2FsYyg1MCkgMCAwO1xyXG5cclxuXHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiByZW0tY2FsYyAoMjApO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogcmVtLWNhbGMoMzIpO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9sIHtcclxuXHRcdFx0XHRcdGxpIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiByZW0tY2FsYygxOCk7XHJcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiByZW0tY2FsYygxMCk7XHJcblxyXG5cdFx0XHQucG9rZW1vbl9fbmFtZXMge1xyXG5cdFx0XHRcdGgxIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogcmVtLWNhbGMoMjApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aDIge1xyXG5cdFx0XHRcdFx0dG9wOiByZW0tY2FsYygzNSk7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IHJlbS1jYWxjKDIwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5wb2tlbW9uX19zdGF0dXMge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogcmVtLWNhbGMoLTgwKTtcclxuXHRcdFx0XHRcdGxlZnQ6IHJlbS1jYWxjKDApO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiByZW0tY2FsYygxMDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Jl9fc3RhdGlzdGljcyB7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiA1N3ZoO1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IHJlbS1jYWxjKDUwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiOmhvc3QgbWFpbiB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbjpob3N0IG1haW4gLnBva2Vtb25fX25hbWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNzVweDtcbiAgcGFkZGluZzogMCAxLjg3NXJlbTtcbn1cbjpob3N0IG1haW4gLnBva2Vtb25fX25hbWVzIGgxIHtcbiAgY29sb3I6IHZhcigtLWJyYW5jbyk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG46aG9zdCBtYWluIC5wb2tlbW9uX19uYW1lcyBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG46aG9zdCBtYWluIC5wb2tlbW9uX19uYW1lcyBoMSxcbjpob3N0IG1haW4gLnBva2Vtb25fX25hbWVzIGgyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBub25lICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IG5vbmUgIWltcG9ydGFudDtcbn1cbjpob3N0IG1haW4gLnBva2Vtb25fX3N0YXR1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IG1haW4gLnBva2Vtb25fX3N0YXR1cyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUuNjI1cmVtO1xuICBsZWZ0OiAxLjg3NXJlbTtcbiAgbWF4LXdpZHRoOiA4LjEyNXJlbTtcbiAgei1pbmRleDogMTA7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCBtYWluIC5wb2tlbW9uX19zdGF0dXNfX3N0YXRpc3RpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWJyYW5jbyk7XG4gIG1pbi1oZWlnaHQ6IDQzLjl2aDtcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gIHBhZGRpbmc6IDYuODc1cmVtIDIuMTg3NXJlbSAxLjg3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMy4xMjVyZW0gMy4xMjVyZW0gMCAwO1xufVxuOmhvc3QgbWFpbiAucG9rZW1vbl9fc3RhdHVzX19zdGF0aXN0aWNzIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogcmVtLWNhbGMgMjA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG46aG9zdCBtYWluIC5wb2tlbW9uX19zdGF0dXNfX3N0YXRpc3RpY3Mgb2wgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0IG1haW4ge1xuICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICB9XG4gIDpob3N0IG1haW4gLnBva2Vtb25fX25hbWVzIGgxIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbiAgOmhvc3QgbWFpbiAucG9rZW1vbl9fbmFtZXMgaDIge1xuICAgIHRvcDogMi4xODc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICA6aG9zdCBtYWluIC5wb2tlbW9uX19zdGF0dXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICA6aG9zdCBtYWluIC5wb2tlbW9uX19zdGF0dXMgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNXJlbTtcbiAgICBsZWZ0OiAwcmVtO1xuICAgIG1heC13aWR0aDogNi4yNXJlbTtcbiAgfVxuICA6aG9zdCBtYWluIC5wb2tlbW9uX19zdGF0dXNfX3N0YXRpc3RpY3Mge1xuICAgIG1pbi1oZWlnaHQ6IDU3dmg7XG4gICAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/poke-header/poke-header.component */ 5825);
/* harmony import */ var _shared_poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/poke-list/poke-list.component */ 477);



class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 3,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "poke-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "poke-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_shared_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_0__.PokeHeaderComponent, _shared_poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_1__.PokeListComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.module */ 3583);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5245);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.component */ 6547);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);

//Module routing

//Components


//Modules


class PagesModule {}
PagesModule.ɵfac = function PagesModule_Factory(t) {
  return new (t || PagesModule)();
};
PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: PagesModule
});
PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _details_details_component__WEBPACK_IMPORTED_MODULE_2__.DetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 3583:
/*!*****************************************!*\
  !*** ./src/app/pages/routing.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutingModule": () => (/* binding */ RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5245);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 6547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'details/:id',
  component: _details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent
}];
class RoutingModule {}
RoutingModule.ɵfac = function RoutingModule_Factory(t) {
  return new (t || RoutingModule)();
};
RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RoutingModule
});
RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 4363:
/*!*********************************************!*\
  !*** ./src/app/service/poke-api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeApiService": () => (/* binding */ PokeApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PokeApiService {
  constructor(http) {
    this.http = http;
    this.url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';
  }
  get apiListAllPokemons() {
    return this.http.get(this.url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(res => res), (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(res => {
      res.results.map(resPokemon => this.apiGetPokemon(resPokemon.url).subscribe({
        next: res => resPokemon.status = res,
        error: error => console.log(error)
      }));
    }));
  }
  apiGetPokemon(url) {
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
}
PokeApiService.ɵfac = function PokeApiService_Factory(t) {
  return new (t || PokeApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
PokeApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PokeApiService,
  factory: PokeApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5825:
/*!*************************************************************!*\
  !*** ./src/app/shared/poke-header/poke-header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeHeaderComponent": () => (/* binding */ PokeHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PokeHeaderComponent {}
PokeHeaderComponent.ɵfac = function PokeHeaderComponent_Factory(t) {
  return new (t || PokeHeaderComponent)();
};
PokeHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PokeHeaderComponent,
  selectors: [["poke-header"]],
  decls: 2,
  vars: 0,
  consts: [["src", "assets/logo.svg", "alt", "Logo Pokedex"]],
  template: function PokeHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Bva2UtaGVhZGVyL3Bva2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vQ3Vyc29fZGVfQW5ndWxhciUyMDJfdjE1L3Bva2VkZXgvc3JjL2FwcC9zaGFyZWQvcG9rZS1oZWFkZXIvcG9rZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0FDSEoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jb25maWctc2Nzcy9yZW0tY2FsYy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICBoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nOiByZW0tY2FsYyg0MCkgMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 477:
/*!*********************************************************!*\
  !*** ./src/app/shared/poke-list/poke-list.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeListComponent": () => (/* binding */ PokeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_poke_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/poke-api.service */ 4363);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _poke_search_poke_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../poke-search/poke-search.component */ 9987);





function PokeListComponent_ng_template_2_a_0_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r4.type.name, " ");
  }
}
const _c0 = function (a1) {
  return ["details", a1];
};
function PokeListComponent_ng_template_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4)(1, "section", 5)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PokeListComponent_ng_template_2_a_0_li_5_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pokemon_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, pokemon_r1.status.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pokemon_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", pokemon_r1.status.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", pokemon_r1.status.sprites.other.dream_world.front_default, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", pokemon_r1.name);
  }
}
function PokeListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PokeListComponent_ng_template_2_a_0_Template, 8, 7, "a", 3);
  }
  if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", pokemon_r1.status);
  }
}
class PokeListComponent {
  constructor(pokemonApiService) {
    this.pokemonApiService = pokemonApiService;
    this.apiError = false;
  }
  ngOnInit() {
    this.pokemonApiService.apiListAllPokemons.subscribe({
      next: value => {
        this.setAllPokemon = value.results;
        this.getAllPokemons = this.setAllPokemon;
      },
      error: error => {
        console.log(error);
        this.apiError = true;
      }
    });
  }
  getSearch(value) {
    const filter = this.setAllPokemon.filter(res => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
PokeListComponent.ɵfac = function PokeListComponent_Factory(t) {
  return new (t || PokeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_poke_api_service__WEBPACK_IMPORTED_MODULE_0__.PokeApiService));
};
PokeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PokeListComponent,
  selectors: [["poke-list"]],
  decls: 3,
  vars: 1,
  consts: [[3, "emmitSearch"], [1, "listagem"], ["ngFor", "", 3, "ngForOf"], ["class", "pokemon", 3, "routerLink", 4, "ngIf"], [1, "pokemon", 3, "routerLink"], [1, "pokemon__status"], [4, "ngFor", "ngForOf"], [1, "pokemon__image"], [3, "src", "alt"]],
  template: function PokeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "poke-search", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("emmitSearch", function PokeListComponent_Template_poke_search_emmitSearch_0_listener($event) {
        return ctx.getSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PokeListComponent_ng_template_2_Template, 1, 1, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.getAllPokemons);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _poke_search_poke_search_component__WEBPACK_IMPORTED_MODULE_1__.PokeSearchComponent],
  styles: ["[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding: 1.25rem 0;\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  background: var(--branco);\n  width: calc(49% - 2.5rem);\n  height: 7.3125rem;\n  margin-bottom: 0.625rem;\n  padding: 1.25rem;\n  border-radius: 0.625rem;\n  text-decoration: none;\n  color: var(--primary--color);\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-style: italic;\n  font-weight: 700;\n  text-transform: capitalize;\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: var(--cinza);\n  font-size: 0.625rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3.125rem;\n  width: 3.75rem;\n  margin-bottom: 0.3125rem;\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__image[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5.625rem;\n  width: 6.875rem;\n  right: 1.25rem;\n  bottom: 1.25rem;\n  background: url('background-list-pokemons.svg') no-repeat;\n}\n[_nghost-%COMP%]   .listagem[_ngcontent-%COMP%]   .pokemon__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4.6875rem;\n  height: 80;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Bva2UtbGlzdC9wb2tlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9DdXJzb19kZV9Bbmd1bGFyJTIwMl92MTUvcG9rZWRleC9zcmMvYXBwL3NoYXJlZC9wb2tlLWxpc3QvcG9rZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0FDTko7QURRSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEseUJBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0JBcEJJO0VBc0JKLHVCQUFBO0VBRUEscUJBQUE7RUFDQSw0QkFBQTtBQ1ZOO0FEYVE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUVBLHVCQUFBO0FDWlY7QURnQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNkVjtBRGdCVTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLHdCQUFBO0FDakJaO0FEc0JNO0VBQ0Usa0JBQUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBcEVBO0VBcUVBLGVBckVBO0VBdUVBLHlEQUFBO0FDeEJWO0FEMEJVO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDeEJaIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29uZmlnLXNjc3MvcmVtLWNhbGMuc2Nzcyc7XHJcblxyXG4kcGFkZGluZzogcmVtLWNhbGMoMjApO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5saXN0YWdlbSB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIHBhZGRpbmc6ICRwYWRkaW5nIDA7XHJcblxyXG4gICAgLnBva2Vtb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJyYW5jbyk7XHJcblxyXG4gICAgICB3aWR0aDogY2FsYyg0OSUgLSAyLjVyZW0pO1xyXG4gICAgICBoZWlnaHQ6IHJlbS1jYWxjKDE1NyAtIDQwKTtcclxuXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHJlbS1jYWxjKDEwKTtcclxuICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcblxyXG4gICAgICBib3JkZXItcmFkaXVzOiByZW0tY2FsYygxMCk7XHJcblxyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LS1jb2xvcik7XHJcblxyXG4gICAgICAmX19zdGF0dXMge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogcmVtLWNhbGMoMjIpO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHJlbS1jYWxjKDEwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNpbnphKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiByZW0tY2FsYygxMCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHJlbS1jYWxjKDUwKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiByZW0tY2FsYyg2MCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHJlbS1jYWxjKDUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJl9faW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblxyXG4gICAgICAgICAgaGVpZ2h0OiByZW0tY2FsYyg5MCk7XHJcbiAgICAgICAgICB3aWR0aDogcmVtLWNhbGMoMTEwKTtcclxuXHJcbiAgICAgICAgICByaWdodDogJHBhZGRpbmc7XHJcbiAgICAgICAgICBib3R0b206ICRwYWRkaW5nO1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmcvYmFja2dyb3VuZC1saXN0LXBva2Vtb25zLnN2Zykgbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiByZW0tY2FsYyg3NSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogODA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAubGlzdGFnZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuOmhvc3QgLmxpc3RhZ2VtIC5wb2tlbW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1icmFuY28pO1xuICB3aWR0aDogY2FsYyg0OSUgLSAyLjVyZW0pO1xuICBoZWlnaHQ6IDcuMzEyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LS1jb2xvcik7XG59XG46aG9zdCAubGlzdGFnZW0gLnBva2Vtb25fX3N0YXR1cyBoMiB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuOmhvc3QgLmxpc3RhZ2VtIC5wb2tlbW9uX19zdGF0dXMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmxpc3RhZ2VtIC5wb2tlbW9uX19zdGF0dXMgdWwgbGkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaW56YSk7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzLjEyNXJlbTtcbiAgd2lkdGg6IDMuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMzEyNXJlbTtcbn1cbjpob3N0IC5saXN0YWdlbSAucG9rZW1vbl9faW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUuNjI1cmVtO1xuICB3aWR0aDogNi44NzVyZW07XG4gIHJpZ2h0OiAxLjI1cmVtO1xuICBib3R0b206IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmcvYmFja2dyb3VuZC1saXN0LXBva2Vtb25zLnN2Zykgbm8tcmVwZWF0O1xufVxuOmhvc3QgLmxpc3RhZ2VtIC5wb2tlbW9uX19pbWFnZSBpbWcge1xuICB3aWR0aDogNC42ODc1cmVtO1xuICBoZWlnaHQ6IDgwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9987:
/*!*************************************************************!*\
  !*** ./src/app/shared/poke-search/poke-search.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokeSearchComponent": () => (/* binding */ PokeSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class PokeSearchComponent {
  constructor() {
    this.emmitSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  search(value) {
    this.emmitSearch.emit(value);
  }
}
PokeSearchComponent.ɵfac = function PokeSearchComponent_Factory(t) {
  return new (t || PokeSearchComponent)();
};
PokeSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PokeSearchComponent,
  selectors: [["poke-search"]],
  outputs: {
    emmitSearch: "emmitSearch"
  },
  decls: 4,
  vars: 0,
  consts: [["type", "text", "placeholder", "Buscar Pokemon...", 3, "keyup"], ["input", ""], ["src", "../../../assets/icons/search.svg", "alt", "Buscar Pokemon"]],
  template: function PokeSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form")(1, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PokeSearchComponent_Template_input_keyup_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.search(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5625rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 0.625rem;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 95%;\n  background: none;\n  border: none;\n  font-size: 1.125rem;\n  color: var(--branco);\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--branco);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Bva2Utc2VhcmNoL3Bva2Utc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vQ3Vyc29fZGVfQW5ndWxhciUyMDJfdjE1L3Bva2VkZXgvc3JjL2FwcC9zaGFyZWQvcG9rZS1zZWFyY2gvcG9rZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLDBCQUFBO0VBQ0EsMENBQUE7RUFFQSx1QkFBQTtBQ0hKO0FES0k7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFFQSxvQkFBQTtBQ0xOO0FET007RUFDRSxvQkFBQTtBQ0xSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vY29uZmlnLXNjc3MvcmVtLWNhbGMuc2Nzcyc7XHJcbjpob3N0IHtcclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZzogcmVtLWNhbGMoMjApIHJlbS1jYWxjKDI1KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMik7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogcmVtLWNhbGMoMTApO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgZm9udC1zaXplOiAgcmVtLWNhbGMoMTgpO1xyXG5cclxuICAgICAgY29sb3I6IHZhcigtLWJyYW5jbyk7XHJcblxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJyYW5jbyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjU2MjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG46aG9zdCBmb3JtIGlucHV0IHtcbiAgd2lkdGg6IDk1JTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogdmFyKC0tYnJhbmNvKTtcbn1cbjpob3N0IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWJyYW5jbyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poke-header/poke-header.component */ 5825);
/* harmony import */ var _poke_search_poke_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poke-search/poke-search.component */ 9987);
/* harmony import */ var _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poke-list/poke-list.component */ 477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);

//Components





class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_0__.PokeHeaderComponent, _poke_search_poke_search_component__WEBPACK_IMPORTED_MODULE_1__.PokeSearchComponent, _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_2__.PokeListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_poke_header_poke_header_component__WEBPACK_IMPORTED_MODULE_0__.PokeHeaderComponent, _poke_search_poke_search_component__WEBPACK_IMPORTED_MODULE_1__.PokeSearchComponent, _poke_list_poke_list_component__WEBPACK_IMPORTED_MODULE_2__.PokeListComponent]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map