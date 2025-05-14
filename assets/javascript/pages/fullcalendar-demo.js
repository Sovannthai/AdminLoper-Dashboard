"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// FullCalendar Demo
// =============================================================
var FullcalendarDemo = /*#__PURE__*/function () {
    function FullcalendarDemo() {
        _classCallCheck(this, FullcalendarDemo);

        this.init();
    }

    _createClass(FullcalendarDemo, [{
        key: "init",
        value: function init() {
            var calendarEl = document.getElementById('calendar');
            var listEventEl = document.getElementById('calendar-list');
            this.calendar = this.registerCalendar(calendarEl);
            this.listEvents = this.registerListEvents(listEventEl);
            this.calendar.render();
            this.listEvents.render();
        }
    }, {
        key: "updateTitleAndTodayBtn",
        value: function updateTitleAndTodayBtn(calendar) {
            // calendar title
            var title = document.querySelector('#calendar-title'); // today button

            var btnToday = document.querySelector('[data-nav="today"]');
            var isToday = moment(calendar.getDate().toISOString()).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'); // update title

            title.innerHTML = calendar.currentData.viewTitle; // disable/enable today button

            if (isToday) {
                btnToday.setAttribute('disabled', 'disabled');
            } else {
                btnToday.removeAttribute('disabled');
            }
        }
    }, {
        key: "getEventData",
        value: function getEventData() {
            // Example event data
            const today = new Date();
            const currentYear = today.getFullYear();
            const currentMonth = today.getMonth();
            
            return [
                {
                    title: 'All Day Event',
                    start: new Date(currentYear, currentMonth, 1),
                    backgroundColor: '#467bcb',
                    borderColor: '#467bcb'
                },
                {
                    title: 'Long Event',
                    start: new Date(currentYear, currentMonth, 7),
                    end: new Date(currentYear, currentMonth, 10),
                    backgroundColor: '#5cb85c',
                    borderColor: '#5cb85c'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: new Date(currentYear, currentMonth, today.getDate() - 3, 16, 0),
                    backgroundColor: '#f0ad4e',
                    borderColor: '#f0ad4e'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: new Date(currentYear, currentMonth, today.getDate() + 4, 16, 0),
                    backgroundColor: '#f0ad4e',
                    borderColor: '#f0ad4e'
                },
                {
                    title: 'Meeting',
                    start: new Date(currentYear, currentMonth, today.getDate(), 10, 30),
                    end: new Date(currentYear, currentMonth, today.getDate(), 12, 30),
                    backgroundColor: '#d9534f',
                    borderColor: '#d9534f'
                },
                {
                    title: 'Lunch',
                    start: new Date(currentYear, currentMonth, today.getDate(), 12, 0),
                    backgroundColor: '#5bc0de',
                    borderColor: '#5bc0de'
                },
                {
                    title: 'Birthday Party',
                    start: new Date(currentYear, currentMonth, today.getDate() + 1, 19, 0),
                    end: new Date(currentYear, currentMonth, today.getDate() + 1, 22, 30),
                    backgroundColor: '#6f42c1',
                    borderColor: '#6f42c1'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: new Date(currentYear, currentMonth, 28),
                    backgroundColor: '#20c997',
                    borderColor: '#20c997'
                }
            ];
        }
    }, {
        key: "registerCalendar",
        value: function registerCalendar(el) {
            var _this = this;

            return new FullCalendar.Calendar(el, {
                themeSystem: 'bootstrap',
                aspectRatio: Looper.isToggleScreenDown() ? 0.85 : 1.35,
                headerToolbar: false,
                initialView: 'dayGridMonth',
                events: this.getEventData(),
                dayMaxEvents: true,
                // allow "more" link when too many events
                editable: true,
                viewDidMount: function viewDidMount() {
                    // view buttons
                    var btnView = document.querySelectorAll('[data-toggle="calendarview"]'); // navigation buttons

                    var btnNav = document.querySelectorAll('[data-toggle="calendarnav"]'); // remove class from elements

                    var removeClass = function removeClass(elems, className) {
                        elems.forEach(function (elem) {
                            return elem.classList.remove(className);
                        });
                    };

                    _this.updateTitleAndTodayBtn(_this.calendar); // update view


                    btnView.forEach(function (btn) {
                        btn.addEventListener('click', function () {
                            var view = btn.dataset.view;
                            var listEventView = "list".concat(view.substr(view.indexOf('Grid') + 4));
                            removeClass(btnView, 'active');
                            btn.classList.add('active');

                            _this.calendar.changeView(view);

                            _this.listEvents.changeView(listEventView);

                            _this.updateTitleAndTodayBtn(_this.calendar);
                        }, false);
                    }); // update navigation

                    btnNav.forEach(function (btn) {
                        btn.addEventListener('click', function () {
                            _this.calendar[btn.dataset.nav]();

                            _this.listEvents[btn.dataset.nav]();

                            _this.updateTitleAndTodayBtn(_this.calendar);
                        }, false);
                    });
                }
            });
        }
    }, {
        key: "registerListEvents",
        value: function registerListEvents(el) {
            return new FullCalendar.Calendar(el, {
                themeSystem: 'bootstrap',
                height: 'auto',
                headerToolbar: false,
                initialView: 'listMonth',
                events: this.getEventData()
            });
        }
    }]);

    return FullcalendarDemo;
}();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */


$(document).on('theme:init', function () {
    new FullcalendarDemo();
});