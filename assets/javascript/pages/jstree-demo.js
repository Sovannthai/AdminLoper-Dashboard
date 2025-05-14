"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Treeview Demo
// =============================================================
var TreeviewDemo = /*#__PURE__*/function () {
    function TreeviewDemo() {
        _classCallCheck(this, TreeviewDemo);

        this.init();
    }

    _createClass(TreeviewDemo, [{
        key: "init",
        value: function init() {
            // event handlers
            this.handleTreeview();
        }
    }, {
        key: "handleTreeview",
        value: function handleTreeview() {
            // jstree1
            $('#jstree1').jstree({
                plugins: ['types'],
                types: Looper.jsTreeTypes()
            }); // jstree2 - json data

            $('#jstree2').jstree({
                core: {
                    data: [{
                        text: 'Root',
                        icon: 'fa fa-hdd text-teal',
                        state: {
                            opened: true
                        },
                        children: [{
                            text: 'Directory',
                            icon: 'fa fa-folder text-teal'
                        }, {
                            text: 'File unread',
                            icon: 'far fa-file'
                        }, {
                            text: 'Another directory',
                            icon: 'fa fa-folder text-teal',
                            state: {
                                opened: true
                            },
                            children: [{
                                text: 'File text',
                                icon: 'far fa-file-alt'
                            }, {
                                text: 'File word',
                                icon: 'far fa-file-alt'
                            }, {
                                text: 'File excel',
                                icon: 'far fa-file-excel'
                            }, {
                                text: 'File powerpoint',
                                icon: 'far fa-file-powerpoint',
                                state: {
                                    disabled: true
                                }
                            }, {
                                text: 'File pdf',
                                icon: 'far fa-file-pdf'
                            }, {
                                text: 'File archive',
                                icon: 'far fa-file-archive'
                            }, {
                                text: 'File image',
                                icon: 'far fa-file-image'
                            }, {
                                text: 'File audio',
                                icon: 'far fa-file-audio'
                            }, {
                                text: 'File video',
                                icon: 'far fa-file-video'
                            }]
                        }, {
                            text: 'Something else',
                            icon: 'fa fa-folder text-teal'
                        }, {
                            text: 'File unread',
                            icon: 'far fa-file'
                        }]
                    }]
                }
            }); // jstree3 - ajax data

            $('#jstree3').jstree({
                core: {
                    data: [{
                        id: "root",
                        text: "Root",
                        icon: "fa fa-hdd text-teal",
                        state: {
                            opened: true
                        },
                        children: [
                            {
                                id: "folder1",
                                text: "Folder 1",
                                icon: "fa fa-folder text-teal",
                                children: [
                                    {
                                        id: "file1",
                                        text: "File 1",
                                        icon: "far fa-file"
                                    },
                                    {
                                        id: "file2",
                                        text: "File 2",
                                        icon: "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                id: "folder2",
                                text: "Folder 2",
                                icon: "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            }); // jstree4 - event

            $('#jstree4').on('changed.jstree', function (e, data) {
                toastr.options = {
                    'positionClass': 'toast-bottom-right'
                };
                toastr.info('The selected id is: ' + data.selected);
            }).jstree({
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            }); // jstree5 - checkbox

            $('#jstree5').jstree({
                plugins: ['checkbox'],
                checkbox: {
                    'keep_selected_style': false
                },
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            }); // jstree6 - contextmenu

            $('#jstree6').jstree({
                plugins: ['types', 'contextmenu'],
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }],
                    check_callback: true
                },
                types: Looper.jsTreeTypes()
            }); // jstree7 - dnd

            $('#jstree7').jstree({
                plugins: ['types', 'dnd'],
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }],
                    check_callback: true
                },
                types: Looper.jsTreeTypes()
            }); // jstree8 - massload

            $('#jstree8').jstree({
                plugins: ['massload', 'state'],
                massload: {
                    data: function data(nodes) {
                        return {
                            "root": {
                                "id": "root",
                                "text": "Root",
                                "icon": "fa fa-hdd text-teal",
                                "children": ["folder1", "folder2"]
                            },
                            "folder1": {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": ["file1", "file2"]
                            },
                            "folder2": {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            },
                            "file1": {
                                "id": "file1",
                                "text": "File 1",
                                "icon": "far fa-file"
                            },
                            "file2": {
                                "id": "file2",
                                "text": "File 2",
                                "icon": "far fa-file-alt"
                            }
                        };
                    }
                },
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            }); // jstree9 - search

            $('#jstree9').jstree({
                plugins: ['search'],
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            });
            var to = false;
            $('#jstree9_q').on('keyup', function () {
                if (to) {
                    clearTimeout(to);
                }

                to = setTimeout(function () {
                    var v = $('#jstree9_q').val();
                    $('#jstree9').jstree(true).search(v);
                }, 250);
            }); // jstree10 - sort

            $('#jstree10').jstree({
                plugins: ['sort'],
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            }); // jstree11 - wholerow

            $('#jstree11').jstree({
                plugins: ['wholerow'],
                core: {
                    data: [{
                        "id": "root",
                        "text": "Root",
                        "icon": "fa fa-hdd text-teal",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {
                                "id": "folder1",
                                "text": "Folder 1",
                                "icon": "fa fa-folder text-teal",
                                "children": [
                                    {
                                        "id": "file1",
                                        "text": "File 1",
                                        "icon": "far fa-file"
                                    },
                                    {
                                        "id": "file2",
                                        "text": "File 2",
                                        "icon": "far fa-file-alt"
                                    }
                                ]
                            },
                            {
                                "id": "folder2",
                                "text": "Folder 2",
                                "icon": "fa fa-folder text-teal"
                            }
                        ]
                    }]
                }
            });
        }
    }]);

    return TreeviewDemo;
}();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */


$(document).on('theme:init', function () {
    new TreeviewDemo();
});