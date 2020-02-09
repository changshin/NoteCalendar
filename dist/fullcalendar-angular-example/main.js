(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\" role=\"banner\">\n  <div class='col-3'>\n    <img width=\"40\" alt=\"Angular\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" />\n    <span>Demo</span>\n  </div>\n  <div class='col-9' >\n      <div class=\"refresh\">\n      2020 Calendar:\n      <span class=\"ml10\"> </span>\n      Start month:<select [(ngModel)]='startMonth'>\n        <option [value]=\"month\" *ngFor=\"let month of monthList\" [selected]=\"month === startMonth\">{{month}}</option>\n      </select>\n      <span class=\"ml10\"> </span>\n      End month:<select [(ngModel)]='endMonth'>\n        <option [value]=\"month\" *ngFor=\"let month of monthList\" [selected]=\"month === endMonth\">{{month}}</option>\n      </select>\n      <span class=\"ml10\"> </span>\n      Notes:<select [(ngModel)]='noteCount'>\n        <option [value]=\"note\" *ngFor=\"let note of noteList\" [selected]=\"note === noteCount\">{{note}}</option>\n      </select>\n      <span class=\"ml10\"> </span>\n      <button (click)=\"refreshNotes()\" class=\"btn-link\">Refresh</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <div class='app-top row'>\n    <div class='col'>\n      <button (click)=\"toggleWeekends()\" class=\"btn-sm btn-primary\">{{weekendsLabel}}</button>\n    </div>\n    <div class='col'>\n      <form [formGroup]=\"formGroup\">\n        <input type=\"text\" class=\"searchInput\" formControlName=\"searchWord\" id=\"searchInput\" name=\"searchWord\"\n          placeholder=\"&#xf002; Search\" minlength=\"2\">\n      </form>\n    </div>\n    <div class='col'>\n      <button (click)=\"openInstruction()\" class=\"btn btn-link\">Instruction</button>\n    </div>\n  </div>\n\n  <div class='app-calendar' *ngIf=\"calendarVisible\">\n    <full-calendar #calendar defaultView=\"dayGridMonth\"\n      [header]=\"calendarHeader\"\n      [displayEventTime]=\"false\"\n      [plugins]=\"calendarPlugins\"\n      [weekends]=\"calendarWeekends\"\n      [events]=\"calendarEvents\"\n      (dateClick)=\"handleDateClick($event)\"\n      (eventMouseEnter)=\"eventMouseEnter($event)\"\n      (eventMouseLeave)=\"eventMouseLeave($event)\"\n      (eventClick)=\"eventClick($event)\"></full-calendar>\n  </div>\n\n  <footer>\n    Chang Shin, 2020-02-08\n  </footer>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0; }\n\np {\n  margin: 0; }\n\n.toolbar {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600; }\n\n.toolbar img {\n    margin: 0 16px; }\n\n.toolbar .refresh {\n    float: right;\n    margin-right: 20px; }\n\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none; }\n\na:hover {\n  color: #125699; }\n\n.content {\n  display: flex;\n  margin: 1.25rem auto;\n  padding: 0 1rem;\n  max-width: 94%;\n  flex-direction: column;\n  align-items: center; }\n\n.content .app-top {\n    margin: 0 0 2rem; }\n\n.content .app-calendar {\n    margin: 0 auto;\n    max-width: 900px; }\n\nfooter {\n  display: flex;\n  margin-top: 1rem;\n  align-items: center; }\n\n.searchInput {\n  background: #FFFFFF;\n  border: 1px solid #CCCCCC;\n  border-radius: 100px; }\n\ninput#searchInput {\n  width: 90%;\n  border-bottom: 1px solid #ccc;\n  outline: 0;\n  background-color: #FAFAFA;\n  padding: 5px 25px 5px 16px;\n  font-family: FontAwesome, \"Open Sans\", Verdana, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  text-decoration: inherit;\n  margin-right: 0px; }\n\n.ml5 {\n  margin-left: 5px; }\n\n.ml10 {\n  margin-left: 10px; }\n\n.ml15 {\n  margin-left: 15px; }\n\n.ml20 {\n  margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFuZy9Qcm9qZWN0czIvbmdDYWxlbmRhci9Ob3RlQ2FsZW5kYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQVBsQjtJQVVJLGNBQWMsRUFBQTs7QUFWbEI7SUFjSSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBS3RCOzs7RUFHRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBTnJCO0lBU0ksZ0JBQWdCLEVBQUE7O0FBVHBCO0lBYUksY0FBYztJQUNkLGdCQUFnQixFQUFBOztBQUtwQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLDBEQUEwRDtFQUMxRCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IC04cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnJlZnJlc2gge1xuICAgIGZsb2F0OiByaWdodDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxLjI1cmVtIGF1dG87XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWF4LXdpZHRoOiA5NCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmFwcC10b3Age1xuICAgIG1hcmdpbjogMCAwIDJyZW07XG4gIH1cblxuICAuYXBwLWNhbGVuZGFyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICB9XG5cbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaElucHV0e1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuaW5wdXQjc2VhcmNoSW5wdXR7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMTZweDtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBcIk9wZW4gU2Fuc1wiLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgbWFyZ2luLXJpZ2h0OjBweDtcbn1cblxuLm1sNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1sMTUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tbDIwIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util.service */ "./src/app/util.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./note-modal/note-modal.component */ "./src/app/note-modal/note-modal.component.ts");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./instruction/instruction.component */ "./src/app/instruction/instruction.component.ts");




















var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, modalService2, dataService, utilService, cdr, fb) {
        var _this = this;
        this.modalService = modalService;
        this.modalService2 = modalService2;
        this.dataService = dataService;
        this.utilService = utilService;
        this.cdr = cdr;
        this.fb = fb;
        this.ACTION = _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"];
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US');
        this.weekendsLabel = 'With Weekends';
        this.searchWord = '';
        this.monthList = ['01', '02', '03', '04', '05', '06', '07', '08'];
        this.startMonth = '01';
        this.endMonth = '03';
        this.noteList = [20, 30, 40, 50, 60, 70];
        this.noteCount = 30;
        this.calendarHeader = {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        };
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]];
        this.calendarWeekends = true;
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.formGroup = fb.group({ searchWord: this.searchField });
        this.searchField.valueChanges
            .debounceTime(500)
            .switchMap(function (searchWord) { return _this.searchNotes(searchWord); })
            .subscribe(function (response) {
            // console.log(response);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.refreshNotes();
    };
    AppComponent.prototype.refreshNotes = function () {
        this.calendarEvents = this.dataService.getSampleNotEvents(this.startMonth, this.endMonth, this.noteCount);
        this.dataService.setCalendarEvents(this.calendarEvents);
    };
    AppComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    AppComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
        this.weekendsLabel = this.calendarWeekends ? 'With Weekends' : 'Without Weekends';
    };
    AppComponent.prototype.eventClick = function (event) {
        var noteEvent = {
            id: event.event._def.publicId,
            title: event.event._def.title,
            start: this.datePipe.transform(event.event._instance.range.end, 'yyyy-MM-dd'),
            note: event.event._def.extendedProps.note,
            type: _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"].SAVE
        };
        this.openModal(noteEvent);
    };
    AppComponent.prototype.handleDateClick = function (arg) {
        if (confirm('Would you like to add an note to ' + arg.dateStr + ' ?')) {
            var noteEvent = {
                id: '',
                title: '',
                start: arg.dateStr,
                note: '',
                type: _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"].ADD
            };
            this.openModal(noteEvent);
        }
    };
    AppComponent.prototype.openInstruction = function () {
        var modalRef = this.modalService2.open(_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_19__["InstructionComponent"], { backdrop: 'static', keyboard: false, size: 'lg', centered: true });
    };
    AppComponent.prototype.openModal = function (noteEvent) {
        var _this = this;
        var modalRef = this.modalService.open(_note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_18__["NoteModalComponent"], { backdrop: 'static', keyboard: false, size: 'lg', centered: true });
        modalRef.componentInstance.noteEvent = noteEvent;
        modalRef.componentInstance.result.subscribe(function (result) {
            if (result.type === _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"].DELETE) {
                _this.calendarEvents = _this.dataService.deleteData(_this.calendarEvents, result.id);
            }
            else if (result.type === _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"].SAVE) {
                _this.calendarEvents = _this.dataService.deleteData(_this.calendarEvents, result.id);
                _this.calendarEvents = _this.calendarEvents.concat(result);
            }
            else if (result.type === _app_constant__WEBPACK_IMPORTED_MODULE_8__["ACTION"].ADD) {
                result.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_9__["UUID"].UUID();
                delete result.type;
                _this.calendarEvents = _this.calendarEvents.concat(result);
            }
            _this.dataService.setCalendarEvents(_this.calendarEvents);
        }, function (reason) { });
    };
    AppComponent.prototype.searchNotes = function (searchWord) {
        if (searchWord) {
            this.calendarEvents = this.dataService.searchData(this.calendarEvents, searchWord);
        }
        else {
            this.calendarEvents = this.dataService.getCalendarEvents();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
    };
    // TODO: will be added mouse hover to show the note
    AppComponent.prototype.eventMouseEnter = function (event) {
        // console.log(event);
    };
    AppComponent.prototype.eventMouseLeave = function (event) {
        // console.log(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarComponent"])
    ], AppComponent.prototype, "calendarComponent", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], _util_service__WEBPACK_IMPORTED_MODULE_16__["UtilService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: ACTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION", function() { return ACTION; });
var ACTION = {
    SAVE: 'save',
    ADD: 'add',
    DELETE: 'delete',
    CANCEL: 'cance;',
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note-modal/note-modal.component */ "./src/app/note-modal/note-modal.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.service */ "./src/app/util.service.ts");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instruction/instruction.component */ "./src/app/instruction/instruction.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_9__["NoteModalComponent"],
                _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_12__["InstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["StorageServiceModule"]
            ],
            entryComponents: [
                _note_modal_note_modal_component__WEBPACK_IMPORTED_MODULE_9__["NoteModalComponent"],
                _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_12__["InstructionComponent"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _util_service__WEBPACK_IMPORTED_MODULE_11__["UtilService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.service */ "./src/app/util.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var DataService = /** @class */ (function () {
    function DataService(utilService, storage) {
        var _this = this;
        this.utilService = utilService;
        this.storage = storage;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
        this.setCalendarEvents = function (data) {
            _this.storage.set('calendarEvents', data);
        };
        this.getCalendarEvents = function () {
            return _this.storage.get('calendarEvents') || [];
        };
    }
    DataService.prototype.updateData = function (table, item) {
        return table.filter(function (element) {
            if (element.id === item.id) {
                element.title = item.title;
                element.note = item.note;
                console.log('matched, element=', element);
            }
            ;
            return element;
        });
    };
    DataService.prototype.deleteData = function (table, id) {
        return table.filter(function (element) { return element.id !== id; });
    };
    DataService.prototype.searchData = function (table, search) {
        return table.filter(function (element) { return element.title.includes(search) || element.note.includes(search); });
    };
    DataService.prototype.getSampleNotEvents = function (startMonth, endMonth, noteCount) {
        var _a;
        var noteEvents = [];
        if (parseInt(startMonth) > parseInt(endMonth)) {
            _a = [endMonth, startMonth], startMonth = _a[0], endMonth = _a[1];
        }
        var startDate = "2020-" + startMonth + "-01";
        var date = new Date("2020-" + endMonth + "-01");
        var date2 = new Date(date.getFullYear(), date.getMonth() + 2, 0);
        var endDate = this.datePipe.transform(date2, 'yyyy-MM-dd');
        for (var i = 0; i < noteCount; i++) {
            noteEvents.push(this.getFakeNoteEvent(startDate, endDate));
        }
        return noteEvents;
    };
    DataService.prototype.getFakeNoteEvent = function (startDate, endDate) {
        return {
            name: '',
            id: angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID(),
            title: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].words(),
            start: faker__WEBPACK_IMPORTED_MODULE_2__["date"].between(startDate, endDate),
            note: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].sentence(),
        };
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["SESSION_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], Object])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/instruction/instruction.component.html":
/*!********************************************************!*\
  !*** ./src/app/instruction/instruction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Instruction</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p *ngFor=\"let instruction of instrunctions; let index = index\">\n    {{index}}. {{instruction}}\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/instruction/instruction.component.scss":
/*!********************************************************!*\
  !*** ./src/app/instruction/instruction.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9uL2luc3RydWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/instruction/instruction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var InstructionComponent = /** @class */ (function () {
    function InstructionComponent(activeModal) {
        this.activeModal = activeModal;
        this.instrunctions = [
            'How to change calendar format? Click "month", "week", or "day" at top right side.',
            'How to go the previous or next month, week, or day? Click "<" or ">" at top left side.',
            'How to add a new note? Click a date in calendar.',
            'How to update a note? Click a note. then update title and note. then click "Save" button.',
            'How to delete a note? Click a note. Then click "Delete" button.',
            'How to search/filter? Type in search box.',
            'How to hide/show weekends? Click "Without/with Weekends".',
            'How to refresh sample notes? select start, end, and notes at right top bar. then click "Refresh".'
        ];
    }
    InstructionComponent.prototype.ngOnInit = function () {
    };
    InstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instruction',
            template: __webpack_require__(/*! ./instruction.component.html */ "./src/app/instruction/instruction.component.html"),
            styles: [__webpack_require__(/*! ./instruction.component.scss */ "./src/app/instruction/instruction.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], InstructionComponent);
    return InstructionComponent;
}());



/***/ }),

/***/ "./src/app/note-modal/note-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/note-modal/note-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Note Event</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss(ACTION.CANCEL)\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && save(noteEvent.type)\" #f=\"ngForm\" novalidate>\n    Due date: {{noteEvent.start}}\n    <p></p>\n    Title<span class='required'>*</span>: <input type=\"text\" [(ngModel)]=\"noteEvent.title\" name=\"title\" #title=\"ngModel\" class=\"form-control\" [ngClass]=\"{'red-border-class': title.errors}\"  required>\n    <p></p>\n    Note<span class='required'>*</span>: <textarea type=\"text\" [(ngModel)]=\"noteEvent.note\" rows=\"4\" cols=\"45\" name=\"note\" #note=\"ngModel\" class=\"form-control\" [ngClass]=\"{'red-border-class': note.errors}\" required></textarea>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn-sm btn-secondary\" (click)=\"activeModal.close(ACTION.CANCEL)\">Cancel</button>\n  <button type=\"button\" class=\"btn-sm btn-danger\" *ngIf=\"noteEvent.id\" (click)=\"save(ACTION.DELETE)\">Delete</button>\n<button type=\"button\" class=\"btn-sm btn-primary\" type=\"submit\" (click)=\"save(noteEvent.type)\" diabled=\"\" >{{noteEvent.type}}</button>\n</div>"

/***/ }),

/***/ "./src/app/note-modal/note-modal.component.scss":
/*!******************************************************!*\
  !*** ./src/app/note-modal/note-modal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGUtbW9kYWwvbm90ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/note-modal/note-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/note-modal/note-modal.component.ts ***!
  \****************************************************/
/*! exports provided: NoteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteModalComponent", function() { return NoteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");




var NoteModalComponent = /** @class */ (function () {
    function NoteModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.ACTION = _app_constant__WEBPACK_IMPORTED_MODULE_3__["ACTION"];
        this.noteEvent = { id: '', title: '', start: '', note: '', type: '' };
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NoteModalComponent.prototype.ngOnInit = function () { };
    NoteModalComponent.prototype.save = function (type) {
        if (type === void 0) { type = _app_constant__WEBPACK_IMPORTED_MODULE_3__["ACTION"].CANCEL; }
        if (this.noteEvent.title && this.noteEvent.note) {
            this.noteEvent.type = type;
            this.activeModal.dismiss();
            this.result.emit(this.noteEvent);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NoteModalComponent.prototype, "noteEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NoteModalComponent.prototype, "result", void 0);
    NoteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-modal',
            template: __webpack_require__(/*! ./note-modal.component.html */ "./src/app/note-modal/note-modal.component.html"),
            styles: [__webpack_require__(/*! ./note-modal.component.scss */ "./src/app/note-modal/note-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NoteModalComponent);
    return NoteModalComponent;
}());



/***/ }),

/***/ "./src/app/util.service.ts":
/*!*********************************!*\
  !*** ./src/app/util.service.ts ***!
  \*********************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.deepCopy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    UtilService.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chang/Projects2/ngCalendar/NoteCalendar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map