"use strict";



define('sports-tournament/app', ['exports', 'sports-tournament/resolver', 'ember-load-initializers', 'sports-tournament/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('sports-tournament/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('sports-tournament/controllers/admin', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('login'),

        data: Ember.observer(function () {
            return "inside data";
        }),

        actions: {

            Tologinpage: function Tologinpage() {
                sessionStorage.clear();

                alert("logged out successfully");

                // document.cookie = "role=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",
                this.transitionToRoute('/login');

                // document.cookie = “uid=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",

            },

            Toadminuser: function Toadminuser() {

                // role=document.cookie();
                this.transitionToRoute('admin.users');
                console.log("adminuser page");
            },
            Toaddtournament: function Toaddtournament() {
                this.transitionToRoute('/admin/addtournament');

                console.log('/admin/addtournament');
            },
            Toshowteam: function Toshowteam() {

                this.transitionToRoute('/admin/teamdetails');
            },

            viewUers: function viewUers() {

                this.set('isTournament', false);

                console.log("users clicked");
                this.set('user', true);
                var readers = Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/login',
                    method: 'GET',
                    async: false,
                    success: function success(resultText) {
                        return resultText;
                    }

                });

                readers = JSON.parse(readers.responseText);

                console.log(this.get('isTournament'));
            },
            Toadminpage: function Toadminpage() {

                this.transitionToRoute('/admin/tournament');
            }

        }

    });
});
define('sports-tournament/controllers/admin/addtournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('admin'),
        // will transition to   --- role of user
        // if user redirect to admin .

        actions: {
            addTournament: function addTournament() {

                console.log(this.get('controller.data'));

                var tournament_details = { "tournament_name": $("#tournament_name").val(),
                    "sports_name": $("#sports_name").val(),
                    "event_type": $("#event_type").val(),
                    "limits": $("#limits").val(),
                    "status": $("#status").val()
                };
                console.log(tournament_details);

                $.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/tournament',
                    method: 'POST',
                    data: JSON.stringify(tournament_details),
                    dataType: "json",
                    async: false,
                    success: function success(resultText) {
                        alert("Tournament added successfully");

                        return resultText;
                    }

                });

                setTimeout(2000);
                this.Toadmin();
            },
            backToHome: function backToHome() {
                console.log(this.get('controller.data'));
                this.Toadmin();
            },
            Toadmin: function Toadmin() {

                this.transitionToRoute('admin.tournament');
            }
        }

    });
});
define('sports-tournament/controllers/admin/edittournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('admin'),

        actions: {
            editTournament: function editTournament() {

                console.log(this.get('controller.data'));
                console.log(this.get('editTournament'));

                console.log("ls1" + localStorage.getItem("tid"));

                var tournament_details = {

                    "tournament_name": $("#tournament_name").val(),
                    "sports_name": $("#sports_name").val(),
                    "event_type": $("#event_type").val(),
                    "limits": $("#limits").val(),
                    "status": $("#status").val()
                    // console.log(tournament_details);
                    // console.log(tid);


                };$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/tournament/' + localStorage.getItem("tid"),
                    method: 'PUT',
                    data: JSON.stringify(tournament_details),
                    dataType: "json",
                    async: false,
                    success: function success(resultText) {
                        alert("Tournament edited successfully");

                        return resultText;
                    }

                });

                $("#result").text("Successfully added the tournament");
                setTimeout(2000);
                this.Toadmin();
            },
            backToHome: function backToHome() {
                console.log(this.get('controller.data'));
                this.Toadmin();
            },
            Toadmin: function Toadmin() {
                this.transitionToRoute('admin.tournament');
            }
        }

    });
});
define('sports-tournament/controllers/admin/teamdetails', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('admin'),

        actions: {
            Toshowteam: function Toshowteam() {
                var tournament = false;
                this.transitionToRoute("admin/teamdetails");
                comsole.log(tournament);
            }
        }
    });
});
define('sports-tournament/controllers/admin/tournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {

            Tologinpage: function Tologinpage() {
                sessionStorage.clear();
                //this.transitionToRoute('/login');
                alert("logged out successfully");
            },

            Toshowtournament: function Toshowtournament(param) {

                console.log("in Toshowtournament function");
                console.log(param);

                var person = {

                    "tournament_id": param

                };

                Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/tournament/' + param,
                    method: 'GET',
                    data: JSON.stringify(person),
                    dataType: "json",
                    async: false,
                    success: function success(data) {

                        console.log(data);
                    },
                    error: function error(e, exception) {
                        console.log('Error occured!!' + e + exception);
                        alert("Already Registered ");
                    }
                });
            },

            Toedittournament: function Toedittournament(param) {
                console.log("in register team function");
                console.log(param);
                localStorage.setItem("tid", param);
                console.log("ls" + localStorage.getItem("tid"));
                this.transitionToRoute("/admin/edittournament/");

                // var person = { 
                //     "team_id":this.get("user_id"),
                //     "tournament_id": param,
                //     "status":0

                //  }

                // $.ajax({
                //     url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
                //     method: 'POST',
                //     data: JSON.stringify(person),
                //     dataType: "json",
                //     async: false,
                //     success:function(data){

                //         console.log(data);    

                //     },
                //     error: function (e, exception) {
                //             console.log('Error occured!!' + e + exception);
                //             // alert("Registrations completed ")
                //         }
                //     });
            },

            Todeletetournament: function Todeletetournament(param) {

                console.log("in delete tournament function");
                Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/tournament/' + param,
                    method: 'DELETE',
                    async: false,
                    success: function success(data) {
                        alert("Tournament deleted successfully");

                        console.log(data);
                    },
                    error: function error(e, exception) {
                        console.log('Error occured!!' + e + exception);
                    }
                });
            },
            Toshowteam: function Toshowteam() {
                var tournament = false;
                this.transitionToRoute('admin/teamdetails');
                comsole.log(tournament);
            }

        }

    });
});
define('sports-tournament/controllers/admin/users', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('admin'),

        actions: {
            showuser: function showuser() {
                var tournament = false;
                this.transitionToRoute('admin/users');
                comsole.log(tournament);
            }
        }

    });
});
define('sports-tournament/controllers/login', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {

            login: function login() {
                var json = { "name": Ember.$('#name').val(), pwd: Ember.$('#pwd').val() };
                var uid;
                var role;

                var data;
                var to = this;
                var cook;
                var response = Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/login',
                    method: 'POST',
                    data: JSON.stringify(json),
                    dataType: "json",
                    async: false,
                    success: function success(resultText) {

                        uid = JSON.stringify(resultText.user_id);
                        role = JSON.stringify(resultText.role);

                        document.cookie = "uid=" + uid;
                        document.cookie = "role=" + role;

                        localStorage.setItem("uid", uid);
                        localStorage.setItem("role", role);

                        console.log(document.cookie);

                        return resultText;
                    }

                });
                if (JSON.parse(response.responseText).role !== "null") {
                    data = JSON.parse(response.responseText);

                    this.set('data', data);

                    //    admin role =0,
                    if (data.role === 0) {
                        to.transitionToRoute('/admin/tournament/');

                        var admin = data.role;
                    } else if (data.role === 1) {
                        to.transitionToRoute('/user/tournament');
                    } else {
                        alert("Invalid username,password");
                    }
                }
                this.set('data', data);
                var userid = this.get('data.user_id');
                this.set("userid", userid);
                // console.log(this.get("userid"));
                // console.log(this.get("data.name"));
            },
            backToHome: function backToHome() {},

            backToLogin: function backToLogin() {
                alert(" Logout Completed");
            },
            backToSignup: function backToSignup() {
                this.transitionToRoute('signup');
            }
        }
    });
});
define('sports-tournament/controllers/signup', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        actions: {

            signUp: function signUp() {

                var role = 0;
                if (document.getElementById("admin").checked) {
                    role = 0;
                } else if (document.getElementById("user").checked) {
                    role = 1;
                }

                var person = {
                    "name": Ember.$('#name').val(),
                    "pwd": Ember.$('#pwd').val(),
                    "age": Ember.$('#age').val(),
                    "address": Ember.$('#address').val(),
                    "blood_group": Ember.$('#blood_group').val(),
                    "role": role
                };

                Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/user',
                    method: 'POST',
                    data: JSON.stringify(person),
                    dataType: "json",
                    async: false,
                    success: function success(data) {
                        console.log(data); // eslint-disable-line no-console
                    }

                });
            },

            Tologinpage: function Tologinpage() {
                this.transitionToRoute('login');
            }

        }

    });
});
define('sports-tournament/controllers/tournaments', ['exports'], function (exports) {
      'use strict';

      Object.defineProperty(exports, "__esModule", {
            value: true
      });
      exports.default = Ember.Controller.extend({
            init: function init() {
                  var role = localStorage.getItem("role");

                  this.set("isuser", role);
            },


            actions: {}
      });
});
define('sports-tournament/controllers/user', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Controller.extend({

        team_id: null,
        tournament_id: null,
        user_id: null,

        controller: Ember.inject.controller('login'),

        data: Ember.observer(function () {
            return "inside data";
        }),

        actions: {

            Tologinpage: function Tologinpage() {
                sessionStorage.clear();

                // document.cookie = "role=; expires=Thu Oct 20 2022 13:10:21 GMT+05:30",

                this.transitionToRoute('/login');
                alert("logged out successfully");
            },
            Touserhome: function Touserhome() {

                var value = document.cookie.split(';').map(function (cookie) {
                    return cookie.split('=');
                }).reduce(function (accumulator, _ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
                }, {});

                console.log("value", value.role);
                this.transitionToRoute('/user/tournament');
                console.log("user home");
            },

            Touseredit: function Touseredit() {

                this.transitionToRoute('/user/edituser');
                console.log("user home");
            }

        }
    });
});
define('sports-tournament/controllers/user/edituser', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        controller: Ember.inject.controller('user'),

        actions: {
            editUser: function editUser() {

                console.log(this.get('controller.data'));
                console.log(this.get('editTournament'));

                console.log("ls1" + localStorage.getItem("uid"));

                var tournament_details = {

                    "name": $("#name").val(),
                    "pwd": $("#pwd").val(),
                    "age": $("#age").val(),
                    "address": $("#address").val(),
                    "blood_group": $("#blood_group").val()

                };
                console.log(tournament_details);
                console.log(localStorage.getItem("uid"));

                $.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/user/' + localStorage.getItem("uid"),
                    method: 'PUT',
                    data: JSON.stringify(tournament_details),
                    dataType: "json",
                    async: false,
                    success: function success(resultText) {
                        alert("User edited successfully");

                        return resultText;
                    }

                });

                setTimeout(2000);
                this.Toadmin();
            },
            backToHome: function backToHome() {
                console.log(this.get('controller.data'));
                this.Toadmin();
            },
            Toadmin: function Toadmin() {
                this.transitionToRoute('/user/tournament');
            }
        }

    });
});
define('sports-tournament/controllers/user/tournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        team_id: null,
        tournament_id: null,
        user_id: null,

        controller: Ember.inject.controller('login'),

        data: Ember.observer(function () {
            return "inside data";
        }),

        actions: {

            Tologinpage: function Tologinpage() {
                sessionStorage.clear();
                this.transitionToRoute('/login');
                alert("logged out successfully");
            },

            Toregistersingle: function Toregistersingle(param) {

                console.log("in register single function");
                console.log(param);
                console.log("ls" + localStorage.getItem("uid"));

                document.cookie = "singleid=" + param;

                var person = {
                    "user_id": uid,
                    "tournament_id": param,
                    "status": 0

                };

                Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/singleparticipation',
                    method: 'POST',
                    data: JSON.stringify(person),
                    dataType: "json",
                    async: false,
                    success: function success(data) {

                        console.log(data);
                    },
                    error: function error(e, exception) {
                        console.log('Error occured!!' + e + exception);
                        alert("Already Registered ");
                    }
                });
            },

            Toregisterteam: function Toregisterteam(param) {

                this.set('tournament_id', param);

                document.cookie = "tournament_id=" + param;

                console.log("in register team function");
                // var id=document.cookie;
                // var uid=id[0];

                console.log(param);
                // console.log("ls"+localStorage.getItem("uid"));

                var person;
                var _this = this;
                var teams = Ember.$.ajax({
                    url: 'http://localhost:8080/SportsTournament/v1/tournament/' + param + '/teamparticipation',
                    method: 'GET',
                    data: JSON.stringify(person),
                    dataType: "json",
                    async: false,
                    success: function success(data) {

                        console.log(data);
                        _this.set("teams", data);
                    },
                    error: function error(e, exception) {
                        console.log('Error occured!!' + e + exception);
                    }
                });

                // only to show team var person = { 
                //     "team_id":this.team_id,
                //     "tournament_id": param,
                //     "status":0

                //  }

                // $.ajax({
                //     url:'http://localhost:8080/SportsTournament/v1/teamparticipation',
                //     method: 'POST',
                //     data: JSON.stringify(person),
                //     dataType: "json",
                //     async: false,
                //     success:function(data){

                //         console.log(data);    

                //     },
                //     error: function (e, exception) {
                //             console.log('Error occured!!' + e + exception);
                //             alert("Selected team has been added ")
                //         }
                //     });
            },

            Toselectedteam: function Toselectedteam(param) {

                console.log("in register selected team function");

                // var team_id : {"team_id" :$('#myForm').val()}

                var team_id = document.getElementById("team").value;

                var team;

                document.cookie = "team_id=" + team_id;

                var team_name = document.getElementById("teamname").value;

                document.cookie = "team_name=" + team_name;

                {
                    {
                        if (team_id == "0") {

                            console.log("in team name method");

                            var person = {

                                "team_name": team_name
                            };

                            var teammembers = {

                                "team_name": team_name,
                                "user_id": localStorage.getItem("uid")

                            };

                            var teamparticipation = {

                                "team_name": team_id,
                                "tournament_id": this.get("tournament_id"),
                                "status": 0

                            };

                            var teamdetailsresponse = Ember.$.ajax({
                                url: 'http://localhost:8080/SportsTournament/v1/teamdetails',
                                method: 'POST',
                                data: JSON.stringify(person),
                                dataType: "json",
                                async: false,
                                success: function success(data) {

                                    Ember.$.ajax({
                                        url: 'http://localhost:8080/SportsTournament/v1/teammembers',
                                        method: 'POST',
                                        data: JSON.stringify(teammembers),
                                        dataType: "json",
                                        async: false,
                                        success: function success(data) {

                                            console.log(data);
                                            Ember.$.ajax({
                                                url: 'http://localhost:8080/SportsTournament/v1/teamparticipation',
                                                method: 'POST',
                                                data: JSON.stringify(teamparticipation),
                                                dataType: "json",
                                                async: false,
                                                success: function success(data) {

                                                    console.log(data);
                                                    alert("Successfully added to team");
                                                },
                                                error: function error(e, exception) {

                                                    console.log('Error occured!!' + e + exception);
                                                    alert("Registrations completed ");
                                                }

                                            });
                                        }
                                    });
                                },
                                error: function error(e, exception) {

                                    console.log('Error occured!!' + e + exception);
                                    alert("Registration for the team is completed ");
                                }

                            });

                            // Also need to insert in team member table with  user id


                            // Also need to insert in team participation table


                            Ember.$.ajax({
                                url: 'http://localhost:8080/SportsTournament/v1/teamparticipation',
                                method: 'POST',
                                data: JSON.stringify(teamparticipation),
                                dataType: "json",
                                async: false,
                                success: function success(data) {

                                    console.log(data);
                                },
                                error: function error(e, exception) {

                                    console.log('Error occured!!' + e + exception);
                                    alert("Registrations completed ");
                                }

                            });
                        } else {

                            console.log("in team existing team registration method");

                            var teammembers = {

                                "team_id": team_id,
                                "user_id": localStorage.getItem("uid")

                            };

                            var teamparticipation = {

                                "team_name": team_id,
                                "tournament_id": this.get("tournament_id"),
                                "status": 0

                            };

                            Ember.$.ajax({
                                url: 'http://localhost:8080/SportsTournament/v1/teammembers',
                                method: 'POST',
                                data: JSON.stringify(teammembers),
                                dataType: "json",
                                async: false,
                                success: function success(data) {

                                    console.log(data);
                                },
                                error: function error(e, exception) {

                                    console.log('Error occured!!' + e + exception);
                                    alert("Registrations completed ");
                                }
                            });

                            Ember.$.ajax({
                                url: 'http://localhost:8080/SportsTournament/v1/teamparticipation',
                                method: 'POST',
                                data: JSON.stringify(teamparticipation),
                                dataType: "json",
                                async: false,
                                success: function success(data) {

                                    console.log(data);
                                },
                                error: function error(e, exception) {

                                    console.log('Error occured!!' + e + exception);
                                    alert("Registrations completed ");
                                }
                            });
                        }
                    }
                }
            }

        }
    });
});
define('sports-tournament/helpers/app-version', ['exports', 'sports-tournament/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('sports-tournament/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('sports-tournament/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('sports-tournament/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sports-tournament/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('sports-tournament/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sports-tournament/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sports-tournament/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('sports-tournament/initializers/export-application-global', ['exports', 'sports-tournament/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sports-tournament/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('sports-tournament/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('sports-tournament/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("sports-tournament/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('sports-tournament/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('sports-tournament/router', ['exports', 'sports-tournament/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {

    this.route('login');
    this.route('signup');
    this.route('tournaments');
    this.route('admin', function () {
      this.route('users');
      this.route('addtournament');
      this.route('tournament');
      this.route('edittournament');
      this.route('teamdetails');
    });
    this.route('user', function () {
      this.route('edituser');
      this.route('tournament');
    });
  });

  exports.default = Router;
});
define('sports-tournament/routes/admin', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            console.log("before model role ", role);

            var role = value.role;

            if (role === "1") {

                this.transitionTo("user.tournament");
            }
        },
        model: function model(params) {
            var user_id = params.user_id;

            this.set('user_id', user_id);
            sessionStorage.setItem('user_id', user_id);
        },


        setupController: function setupController(controller) {
            controller.set('data', this.get('data'));
            controller.set('user_id', this.get('user_id'));
            // controller.set("role",this.get(role));
        }

    });
});
define('sports-tournament/routes/admin/addtournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            console.log("admin before model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("user.tournament");
            }
        }
    });
});
define('sports-tournament/routes/admin/edittournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            console.log("admin before model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("user.tournament");
            }
        }
    });
});
define('sports-tournament/routes/admin/teamdetails', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            console.log("admin before model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("user.tournament");
            }
        },


        result: null,

        model: function model() {

            var _this = this;
            $.ajax({
                async: false,
                method: 'GET',
                url: 'http://localhost:8080/SportsTournament/v1/teamdetails',
                success: function success(result) {
                    _this.set("result", JSON.parse(result));
                }

            });

            return this.get("result");
        }

    });
});
define('sports-tournament/routes/admin/tournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            console.log("admin before model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("user.tournament");
            }
        },


        result: null,

        model: function model() {

            console.log("admin model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    value = _ref5[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("login");
                alert("invalid access");
            } else {

                var _this = this;
                $.ajax({
                    async: false,
                    method: 'GET',
                    url: 'http://localhost:8080/SportsTournament/v1/tournament',
                    success: function success(result) {
                        _this.set("result", JSON.parse(result));
                    }

                });

                return this.get("result");
            }
        }

    });
});
define('sports-tournament/routes/admin/users', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {

            console.log("admin before model");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "1") {
                this.transitionTo("user.tournament");
            }
        },

        result: null,

        model: function model() {
            var tournament = false;
            var _this = this;
            $.ajax({
                async: false,
                method: 'GET',
                url: 'http://localhost:8080/SportsTournament/v1/user',

                success: function success(result) {
                    _this.set("result", JSON.parse(result));
                }

            });
            console.log(tournament);
            return this.get("result");
        }
    });
});
define('sports-tournament/routes/login', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            if (sessionStorage.getItem('user_id') != null) {
                this.transitionTo('/user/');
            } else if (sessionStorage.getItem('admin_id') != null) {
                this.transitionTo('/admin/tournament');
            }
        }
    });
});
define('sports-tournament/routes/signup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('sports-tournament/routes/tournaments', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            // var role=localStorage.getItem("role");
            var role = 0;
        }
    });
});
define('sports-tournament/routes/user', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforeModel: function beforeModel() {
            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyuserrole", role);
            console.log("before model role ", role);

            if (role === "0") {
                this.transitionTo("admin.tournament");
            }
        }
    });
});
define('sports-tournament/routes/user/edituser', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        beforemodel: function beforemodel() {

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value.role;
            console.log("onlyadminrole", role);

            if (role === "0") {
                this.transitionTo("admin.tournament");
            }
        }
    });
});
define('sports-tournament/routes/user/tournament', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    exports.default = Ember.Route.extend({
        result: null,
        tournament_id: null,
        user_id: null,

        beforeModel: function beforeModel() {

            console.log("user before model user check");

            var value = document.cookie.split(';').map(function (cookie) {
                return cookie.split('=');
            }).reduce(function (accumulator, _ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                return _defineProperty({ accumulator: accumulator }, key.trim(), decodeURIComponent(value));
            }, {});

            console.log("value", value.role);

            var role = value !== null ? value.role : null;
            console.log("onlyadminrole", role);

            if (role === "0") {
                this.transitionTo("admin.tournament");
            } else if (role === "null") {
                this.transitionTo("login");
            }
        },


        model: function model() {

            // console.log(this.controllerFor('login').get('data'));

            var _this = this;
            $.ajax({
                async: false,
                method: 'GET',
                url: 'http://localhost:8080/SportsTournament/v1/tournament',
                success: function success(result) {
                    _this.set("result", JSON.parse(result));
                    // tournament_id = result.tournament_id;
                }

            });

            return this.get("result");
        }

    });
});
define('sports-tournament/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("sports-tournament/templates/admin", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ChtFUEHy", "block": "{\"statements\":[[4,\" Coding by CodingLab | www.codinglabweb.com\"],[0,\"\\n\"],[11,\"html\",[]],[15,\"lang\",\"en\"],[13],[0,\"\\n  \"],[11,\"head\",[]],[13],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"charset\",\"UTF-8\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"http-equiv\",\"X-UA-Compatible\"],[15,\"content\",\"IE=edge\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"name\",\"viewport\"],[15,\"content\",\"width=device-width, initial-scale=1.0\"],[13],[14],[0,\"\\n    \"],[4,\"<title>Sidebar Menu | Side Navigation Bar</title>\"],[0,\"\\n    \"],[4,\" CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"rel\",\"stylesheet\"],[15,\"href\",\"css/style.css\"],[13],[14],[0,\"\\n    \"],[4,\" Boxicons CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"href\",\"https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css\"],[15,\"rel\",\"stylesheet\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"body\",[]],[13],[0,\"\\n   \"],[11,\"nav\",[]],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n        \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Main menu\"],[14],[0,\"\\n    \\n      \"],[11,\"div\",[]],[15,\"class\",\"sidebar\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n          \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Menu \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"sidebar-content\"],[13],[0,\"\\n          \"],[11,\"ul\",[]],[15,\"class\",\"lists\"],[13],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toadminpage\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Home\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n                \\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toadminuser\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-home-alt icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Users\"],[14],[0,\"\\n                 \\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toaddtournament\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Add Tournament\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toshowteam\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Team Details\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Tologinpage\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-log-out icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Logout\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\\n\\n     \"],[11,\"section\",[]],[15,\"class\",\"overlay\"],[13],[14],[0,\"\\n\\n    \"],[11,\"script\",[]],[13],[0,\"\\n      const navBar = document.querySelector(\\\"nav\\\"),\\n        menuBtns = document.querySelectorAll(\\\".menu-icon\\\"),\\n        overlay = document.querySelector(\\\".overlay\\\");\\n\\n      menuBtns.forEach((menuBtn) => {\\n        menuBtn.addEventListener(\\\"click\\\", () => {\\n          navBar.classList.toggle(\\\"open\\\");\\n        });\\n      });\\n\\n      overlay.addEventListener(\\\"click\\\", () => {\\n        navBar.classList.remove(\\\"open\\\");\\n      });\\n    \"],[14],[0,\"\\n\\n\\n  \\n  \\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin.hbs" } });
});
define("sports-tournament/templates/admin/addtournament", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fx1tDolQ", "block": "{\"statements\":[[11,\"form\",[]],[15,\"class\",\"container-login100\"],[15,\"style\",\"/*! background: -o-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: -moz-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: linear-gradient(-135deg, #c850c0, #4158d0); */display: block;\"],[5,[\"action\"],[[28,[null]],\"signUp\",true],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \\n  \"],[11,\"fieldset\",[]],[15,\"style\",\"margin-left: 350px;margin-right: 390px;margin-top: 50px;\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"form-head\"],[15,\"style\",\"margin-top: 50px;margin-bottom: 30px;margin-left: 200px;\"],[13],[0,\"Enter Tournament details\"],[14],[0,\"\\n\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"tournament_name\",\"input100 ember-text-field ember-view\",\"name\",[28,[\"username\"]],\"tournament_name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"sports_name\",\"input100 ember-text-field ember-view\",\"pwd\",[28,[\"pwd\"]],\"sports_name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"limits\",\"number\",\"input100 ember-text-field ember-view\",\"limits\",[28,[\"age\"]],\"limits\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n   \"],[11,\"p\",[]],[15,\"style\",\"font-size: 20px;margin-left: 30px;\"],[13],[0,\"Team type\"],[14],[0,\"\\n          \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"event_type\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"1\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Single\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"event_type\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"0\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Team\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"style\",\"font-size: 20px;margin-left: 30px;\"],[13],[0,\"Status of Tournament\"],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"status\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"0\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Yet to Start\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"status\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"1\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Started\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \\n\\n          \\n    \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 20px;;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"addTournament\"]],[13],[0,\"Add Tournament\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 10px;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"Toadmin\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\"],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\" --}}\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin/addtournament.hbs" } });
});
define("sports-tournament/templates/admin/edittournament", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N+Ze70Xv", "block": "{\"statements\":[[11,\"form\",[]],[15,\"class\",\"container-login100\"],[15,\"style\",\"/*! background: -o-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: -moz-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: linear-gradient(-135deg, #c850c0, #4158d0); */display: block;\"],[5,[\"action\"],[[28,[null]],\"signUp\",true],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \\n  \"],[11,\"fieldset\",[]],[15,\"style\",\"margin-left: 350px;margin-right: 390px;margin-top: 50px;\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"form-head\"],[15,\"style\",\"margin-top: 50px;margin-bottom: 30px;margin-left: 200px;\"],[13],[0,\"Edit Tournament details\"],[14],[0,\"\\n\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"tournament_name\",\"input100 ember-text-field ember-view\",\"name\",[28,[\"username\"]],\"tournament_name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"sports_name\",\"input100 ember-text-field ember-view\",\"pwd\",[28,[\"pwd\"]],\"sports_name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"limits\",\"number\",\"input100 ember-text-field ember-view\",\"limits\",[28,[\"age\"]],\"limits\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n   \"],[11,\"p\",[]],[15,\"style\",\"font-size: 20px;margin-left: 30px;\"],[13],[0,\"Team type\"],[14],[0,\"\\n          \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"event_type\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"1\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Single\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"event_type\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"0\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Team\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"style\",\"font-size: 20px;margin-left: 30px;\"],[13],[0,\"Status of Tournament\"],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"status\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"0\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Yet to Start\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \"],[11,\"input\",[]],[15,\"type\",\"radio\"],[15,\"id\",\"status\"],[15,\"class\",\"radioBtnClass\"],[15,\"name\",\"numbers\"],[15,\"value\",\"1\"],[15,\"style\",\"margin-left: 40px;\"],[13],[14],[0,\"Started\"],[11,\"br\",[]],[13],[14],[0,\"\\n            \\n\\n          \\n    \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 20px;;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"editTournament\"]],[13],[0,\"Add Tournament\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 10px;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"Toadmin\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\\n\\n\"],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin/edittournament.hbs" } });
});
define("sports-tournament/templates/admin/teamdetails", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mVCr4y76", "block": "{\"statements\":[[0,\"\\n\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"table-data\"],[13],[0,\"\\n  \"],[11,\"table\",[]],[13],[0,\"\\n\\n     \"],[11,\"caption\",[]],[13],[0,\"Team Details \"],[14],[0,\"\\n    \"],[11,\"tbody\",[]],[15,\"id\",\"myTable\"],[13],[0,\"\\n        \\n    \"],[11,\"tr\",[]],[15,\"class\",\"bg-info\"],[13],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"ID\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"team_name\"],[14],[0,\"\\n\"],[0,\"      \\n    \"],[14],[0,\"\\n   \\n    \\n      \"],[1,[33,[\"log\"],[\"model\"],null],false],[0,\"\\n      \"],[1,[33,[\"log\"],[[28,[\"model\"]]],null],false],[0,\"\\n\\n      \\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[11,\"tr\",[]],[13],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"teams\",\"team_id\"]],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"teams\",\"team_name\"]],false],[14],[0,\"\\n       \\n\"],[0,\"        \\n\"],[0,\"         \"],[14],[0,\"\\n\"]],\"locals\":[\"teams\"]},null],[0,\"   \\n    \\n    \\n    \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin/teamdetails.hbs" } });
});
define("sports-tournament/templates/admin/tournament", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jgAB6qSc", "block": "{\"statements\":[[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"table-data\"],[15,\"style\",\"margin-left: 70px;\"],[13],[0,\"\\n  \"],[11,\"table\",[]],[13],[0,\"\\n     \"],[11,\"caption\",[]],[13],[0,\"Tournament Details \"],[14],[0,\"\\n    \"],[11,\"tbody\",[]],[15,\"id\",\"myTable\"],[13],[0,\"\\n        \\n    \"],[11,\"tr\",[]],[15,\"class\",\"bg-info\"],[13],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Tournament\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Sports Name\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Event type\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Limits\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Status\"],[14],[0,\"\\n         \"],[11,\"th\",[]],[13],[0,\"Start Date\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"End Date\"],[14],[0,\"\\n        \\n        \"],[11,\"th\",[]],[13],[0,\"Edit\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Delete\"],[14],[0,\"\\n      \\n    \"],[14],[0,\"\\n   \\n    \\n      \"],[1,[33,[\"log\"],[\"model\"],null],false],[0,\"\\n      \"],[1,[33,[\"log\"],[[28,[\"model\"]]],null],false],[0,\"\\n     \\n\\n      \\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[11,\"tr\",[]],[13],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"tournament_name\"]],false],[14],[0,\"\\n       \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"sports_name\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"tournaments\",\"event_type\"]]],null,{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Team Participation\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Single Participation\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n        \\n        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"limits\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"tournaments\",\"status\"]]],null,{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Started\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Yet to Start\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"startDate\"]],false],[14],[0,\"\\n          \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"endDate\"]],false],[14],[0,\"\\n        \\n        \"],[11,\"td\",[]],[13],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"Toedittournament\",[28,[\"tournaments\",\"tournament_id\"]]]],[13],[0,\"Edit\"],[14],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"Todeletetournament\",[28,[\"tournaments\",\"tournament_id\"]]]],[13],[0,\"Delete\"],[14],[14],[0,\"\\n        \\n         \"],[14],[0,\"\\n\"]],\"locals\":[\"tournaments\"]},null],[0,\"   \\n    \\n    \\n    \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin/tournament.hbs" } });
});
define("sports-tournament/templates/admin/users", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zMtguaON", "block": "{\"statements\":[[1,[33,[\"log\"],[[28,[\"tournament\"]]],null],false],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"table-data\"],[13],[0,\"\\n  \"],[11,\"table\",[]],[13],[0,\"\\n     \"],[11,\"caption\",[]],[13],[0,\"User Details \"],[14],[0,\"\\n    \"],[11,\"tbody\",[]],[15,\"id\",\"myTable\"],[13],[0,\"\\n     \\n    \"],[11,\"tr\",[]],[15,\"class\",\"bg-info\"],[13],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"name\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"age\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"address\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"blood_group\"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \\n    \\n    \\n      \"],[1,[33,[\"log\"],[\"model\"],null],false],[0,\"\\n      \"],[1,[33,[\"log\"],[[28,[\"model\"]]],null],false],[0,\"\\n\\n     \\n       \\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"user\",\"role\"]]],null,{\"statements\":[[0,\"        \"],[11,\"tr\",[]],[13],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"user\",\"name\"]],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"user\",\"age\"]],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"user\",\"address\"]],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"user\",\"blood_group\"]],false],[14],[0,\"\\n       \\n        \\n         \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"user\"]},null],[0,\"        \\n    \\n    \\n    \"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/admin/users.hbs" } });
});
define("sports-tournament/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oXI5TXKa", "block": "{\"statements\":[[11,\"header\",[]],[15,\"class\",\"head\"],[13],[0,\"\\n    \"],[11,\"center\",[]],[13],[0,\"\\n        \"],[11,\"h1\",[]],[15,\"class\",\"cent\"],[15,\"style\",\"margin-top: 30px;\"],[13],[0,\"SPORTS TOURNAMENT MANAGEMENT SYSTEM\"],[14],[0,\"\\n        \\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"style\",[]],[13],[0,\"\\n\\nbody {\\n\\n  \\n  background: linear-gradient(-135deg, #afede4, #b1d041);\\n\\n}\\n\"],[14],[0,\"\\n\"],[11,\"body\",[]],[13],[0,\"\\n    \\n\"],[14],[0,\"\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/application.hbs" } });
});
define("sports-tournament/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4gZM1wE9", "block": "{\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[11,\"body\",[]],[13],[0,\"\\n\\t\\n\\t\"],[11,\"div\",[]],[15,\"class\",\"limiter\"],[13],[0,\"\\n\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"container-login100\"],[13],[0,\"\\n\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"wrap-login100\"],[13],[0,\"\\n\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"login100-pic js-tilt\"],[15,\"data-tiltstyle\",\"will-change: transform; transform: perspective(300px) rotateX(0deg) rotateY(0deg);\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\"],[11,\"img\",[]],[15,\"src\",\"https://ims.gpo.gov/image/Login-logo1.png\"],[15,\"alt\",\"IMG\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\\t\\t\"],[11,\"form\",[]],[15,\"class\",\"login100-form validate-form\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"login100-form-title\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\tLogin\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"wrap-input100 validate-input\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"class\",\"id\",\"type\",\"name\",\"placeholder\"],[\"input100\",\"name\",\"text\",\"email\",\"Email\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"focus-input100\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"symbol-input100\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"fa fa-envelope\"],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"wrap-input100 validate-input\"],[15,\"data-validate\",\"Password is required\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[1,[33,[\"input\"],null,[[\"class\",\"id\",\"type\",\"name\",\"placeholder\"],[\"input100\",\"pwd\",\"password\",\"pwd\",\"Password\"]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"focus-input100\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"span\",[]],[15,\"class\",\"symbol-input100\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[11,\"i\",[]],[15,\"class\",\"fa fa-lock\"],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\"],[11,\"div\",[]],[15,\"class\",\"container-login100-form-btn\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[5,[\"action\"],[[28,[null]],\"login\"]],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\tLogin\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\n          \"],[11,\"div\",[]],[15,\"class\",\"container-login100-form-btn\"],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[5,[\"action\"],[[28,[null]],\"backToSignup\"]],[13],[0,\"\\n\\t\\t\\t\\t\\t\\t\\tSignup\\n\\t\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\\t\\t\"],[14],[0,\"\\n\\n\\t\\t\\t\\t\\t\\n\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\\t\"],[14],[0,\"\\n\\t\\t\"],[14],[0,\"\\n\\t\"],[14],[0,\"\\n\\t\\n\\t\\n\\n\\t\\n\"],[4,\"===============================================================================================\"],[0,\"\\t\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"vendor/jquery/jquery-3.2.1.min.js\"],[13],[14],[0,\"\\n\"],[4,\"===============================================================================================\"],[0,\"\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"vendor/bootstrap/js/popper.js\"],[13],[14],[0,\"\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"vendor/bootstrap/js/bootstrap.min.js\"],[13],[14],[0,\"\\n\"],[4,\"===============================================================================================\"],[0,\"\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"vendor/select2/select2.min.js\"],[13],[14],[0,\"\\n\"],[4,\"===============================================================================================\"],[0,\"\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"vendor/tilt/tilt.jquery.min.js\"],[13],[14],[0,\"\\n\\t\"],[11,\"script\",[]],[13],[0,\"\\n\\t\\t$('.js-tilt').tilt({\\n\\t\\t\\tscale: 1.1\\n\\t\\t})\\n\\t\"],[14],[0,\"\\n\"],[4,\"===============================================================================================\"],[0,\"\\n\\t\"],[11,\"script\",[]],[15,\"src\",\"js/main.js\"],[13],[14],[0,\"\\n\\n\"],[14],[0,\"\\n\\n\"],[0,\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/login.hbs" } });
});
define("sports-tournament/templates/signup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4E6henvq", "block": "{\"statements\":[[0,\"\\n\"],[11,\"form\",[]],[15,\"class\",\"container-login100\"],[15,\"style\",\"/*! background: -o-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: -moz-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: linear-gradient(-135deg, #c850c0, #4158d0); */display: block;\"],[5,[\"action\"],[[28,[null]],\"signUp\",true],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \\n  \"],[11,\"fieldset\",[]],[15,\"style\",\"margin-left: 350px;margin-right: 390px;margin-top: 50px;\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"form-head\"],[15,\"style\",\"margin-top: 50px;margin-bottom: 30px;\"],[13],[0,\" Please fill the details to create an account\"],[14],[0,\"\\n\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"name\",\"input100 ember-text-field ember-view\",\"name\",[28,[\"username\"]],\"name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"pwd\",\"pwd\",\"input100 ember-text-field ember-view\",\"pwd\",[28,[\"pwd\"]],\"pwd\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"age\",\"number\",\"input100 ember-text-field ember-view\",\"age\",[28,[\"age\"]],\"age\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"name\",\"class\",\"value\",\"placeholder\",\"required\"],[\"address\",\"address\",\"input100 ember-text-field ember-view\",[28,[\"address\"]],\"address\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"name\",\"class\",\"value\",\"placeholder\",\"required\"],[\"blood_group\",\"blood_group\",\"input100 ember-text-field ember-view\",[28,[\"blood_group\"]],\"blood_group\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n    \\n    \\n    \"],[11,\"div\",[]],[15,\"class\",\"radio\"],[15,\"style\",\"display:flex;flex-direction:column\"],[13],[0,\" Role:\\n          \"],[11,\"div\",[]],[15,\"style\",\"margin-left:60px\"],[13],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"id\",\"name\",\"class\",\"required\"],[\"radio\",\"admin\",\"admin\",\"admin\",\"hover-radio\",true]]],false],[0,\"\\n          \"],[11,\"label\",[]],[15,\"for\",\"admin\"],[13],[0,\"Admin\"],[14],[11,\"br\",[]],[13],[14],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"style\",\"margin-left:60px\"],[13],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"id\",\"name\",\"class\"],[\"radio\",\"user\",\"user\",\"user\",\"hover-radio\"]]],false],[0,\"\\n          \"],[11,\"label\",[]],[15,\"for\",\"user\"],[13],[0,\"User\"],[14],[11,\"br\",[]],[13],[14],[14],[0,\"\\n        \\n    \"],[14],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 20px;;margin-left: 40px;\"],[13],[0,\"SignUp\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 10px;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"Tologinpage\"]],[13],[0,\"Login\"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/signup.hbs" } });
});
define("sports-tournament/templates/tournaments", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g1Os8aPI", "block": "{\"statements\":[[4,\" Coding by CodingLab | www.codinglabweb.com\"],[0,\"\\n\"],[11,\"html\",[]],[15,\"lang\",\"en\"],[13],[0,\"\\n  \"],[11,\"head\",[]],[13],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"charset\",\"UTF-8\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"http-equiv\",\"X-UA-Compatible\"],[15,\"content\",\"IE=edge\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"name\",\"viewport\"],[15,\"content\",\"width=device-width, initial-scale=1.0\"],[13],[14],[0,\"\\n    \"],[4,\"<title>Sidebar Menu | Side Navigation Bar</title>\"],[0,\"\\n    \"],[4,\" CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"rel\",\"stylesheet\"],[15,\"href\",\"css/style.css\"],[13],[14],[0,\"\\n    \"],[4,\" Boxicons CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"href\",\"https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css\"],[15,\"rel\",\"stylesheet\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"body\",[]],[13],[0,\"\\n   \"],[11,\"nav\",[]],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n        \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Main menu\"],[14],[0,\"\\n    \\n      \"],[11,\"div\",[]],[15,\"class\",\"sidebar\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n          \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Menu \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"sidebar-content\"],[13],[0,\"\\n          \"],[11,\"ul\",[]],[15,\"class\",\"lists\"],[13],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toadminpage\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Home\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n               \\n\"],[6,[\"if\"],[[28,[\"isuser\"]]],null,{\"statements\":[[0,\"                 \\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toadminuser\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-home-alt icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Users\"],[14],[0,\"\\n                 \\n              \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[14],[0,\"\\n            \\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isuser\"]]],null,{\"statements\":[[0,\"              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toaddtournament\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Add Tournament\"],[14],[0,\"\\n              \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isuser\"]]],null,{\"statements\":[[0,\"            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Toshowteam\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-bar-chart-alt-2 icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Team Details\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Tologinpage\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-log-out icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Logout\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\\n\\n     \"],[11,\"section\",[]],[15,\"class\",\"overlay\"],[13],[14],[0,\"\\n\\n    \"],[11,\"script\",[]],[13],[0,\"\\n      const navBar = document.querySelector(\\\"nav\\\"),\\n        menuBtns = document.querySelectorAll(\\\".menu-icon\\\"),\\n        overlay = document.querySelector(\\\".overlay\\\");\\n\\n      menuBtns.forEach((menuBtn) => {\\n        menuBtn.addEventListener(\\\"click\\\", () => {\\n          navBar.classList.toggle(\\\"open\\\");\\n        });\\n      });\\n\\n      overlay.addEventListener(\\\"click\\\", () => {\\n        navBar.classList.remove(\\\"open\\\");\\n      });\\n    \"],[14],[0,\"\\n\\n\\n  \\n  \\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\\n\\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/tournaments.hbs" } });
});
define("sports-tournament/templates/user", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bBfoaier", "block": "{\"statements\":[[0,\"\\n\"],[4,\" Coding by CodingLab | www.codinglabweb.com\"],[0,\"\\n\"],[11,\"html\",[]],[15,\"lang\",\"en\"],[13],[0,\"\\n  \"],[11,\"head\",[]],[13],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"charset\",\"UTF-8\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"http-equiv\",\"X-UA-Compatible\"],[15,\"content\",\"IE=edge\"],[13],[14],[0,\"\\n    \"],[11,\"meta\",[]],[15,\"name\",\"viewport\"],[15,\"content\",\"width=device-width, initial-scale=1.0\"],[13],[14],[0,\"\\n    \"],[4,\"<title>Sidebar Menu | Side Navigation Bar</title>\"],[0,\"\\n    \"],[4,\" CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"rel\",\"stylesheet\"],[15,\"href\",\"css/style.css\"],[13],[14],[0,\"\\n    \"],[4,\" Boxicons CSS \"],[0,\"\\n    \"],[11,\"link\",[]],[15,\"href\",\"https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css\"],[15,\"rel\",\"stylesheet\"],[13],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"body\",[]],[13],[0,\"\\n    \"],[11,\"nav\",[]],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n        \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Main menu\"],[14],[0,\"\\n    \\n      \"],[11,\"div\",[]],[15,\"class\",\"sidebar\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n          \"],[11,\"i\",[]],[15,\"class\",\"bx bx-menu menu-icon\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"logo-name\"],[13],[0,\"Menu \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"sidebar-content\"],[13],[0,\"\\n          \"],[11,\"ul\",[]],[15,\"class\",\"lists\"],[13],[0,\"\\n             \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n                \\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Touserhome\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-home-alt icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Home\"],[14],[0,\"\\n                 \\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n                \\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Touseredit\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-home-alt icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Edit My Profile\"],[14],[0,\"\\n                 \\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \\n            \\n            \"],[11,\"li\",[]],[15,\"class\",\"list\"],[13],[0,\"\\n              \"],[11,\"a\",[]],[15,\"class\",\"nav-link\"],[5,[\"action\"],[[28,[null]],\"Tologinpage\"]],[13],[0,\"\\n                \"],[11,\"i\",[]],[15,\"class\",\"bx bx-log-out icon\"],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"link\"],[13],[0,\"Logout\"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\\n\\n     \"],[11,\"section\",[]],[15,\"class\",\"overlay\"],[13],[14],[0,\"\\n\\n    \"],[11,\"script\",[]],[13],[0,\"\\n      const navBar = document.querySelector(\\\"nav\\\"),\\n        menuBtns = document.querySelectorAll(\\\".menu-icon\\\"),\\n        overlay = document.querySelector(\\\".overlay\\\");\\n\\n      menuBtns.forEach((menuBtn) => {\\n        menuBtn.addEventListener(\\\"click\\\", () => {\\n          navBar.classList.toggle(\\\"open\\\");\\n        });\\n      });\\n\\n      overlay.addEventListener(\\\"click\\\", () => {\\n        navBar.classList.remove(\\\"open\\\");\\n      });\\n   \"],[14],[0,\"\\n\\n\\n  \\n  \\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n \\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/user.hbs" } });
});
define("sports-tournament/templates/user/edituser", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZJz9fuR0", "block": "{\"statements\":[[11,\"form\",[]],[15,\"class\",\"container-login100\"],[15,\"style\",\"/*! background: -o-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: -moz-linear-gradient(-135deg, #c850c0, #4158d0); *//*! background: linear-gradient(-135deg, #c850c0, #4158d0); */display: block;\"],[5,[\"action\"],[[28,[null]],\"signUp\",true],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \\n  \"],[11,\"fieldset\",[]],[15,\"style\",\"margin-left: 350px;margin-right: 390px;margin-top: 50px;\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"form-head\"],[15,\"style\",\"margin-top: 50px;margin-bottom: 30px;\"],[13],[0,\" You can edit your profile here \"],[14],[0,\"\\n\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"name\",\"input100 ember-text-field ember-view\",\"name\",[28,[\"username\"]],\"name\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"pwd\",\"pwd\",\"input100 ember-text-field ember-view\",\"pwd\",[28,[\"pwd\"]],\"pwd\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"type\",\"class\",\"name\",\"value\",\"placeholder\",\"required\"],[\"age\",\"number\",\"input100 ember-text-field ember-view\",\"age\",[28,[\"age\"]],\"age\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"name\",\"class\",\"value\",\"placeholder\",\"required\"],[\"address\",\"address\",\"input100 ember-text-field ember-view\",[28,[\"address\"]],\"address\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"id\",\"name\",\"class\",\"value\",\"placeholder\",\"required\"],[\"blood_group\",\"blood_group\",\"input100 ember-text-field ember-view\",[28,[\"blood_group\"]],\"blood_group\",true]]],false],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n    \\n    \\n   \\n    \\n    \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 20px;;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"editUser\"]],[13],[0,\"Edit Details\"],[14],[0,\"\\n    \"],[11,\"button\",[]],[15,\"class\",\"login100-form-btn\"],[15,\"style\",\"width: 25%;margin-bottom: 10px;margin-left: 40px;\"],[5,[\"action\"],[[28,[null]],\"Toadmin\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/user/edituser.hbs" } });
});
define("sports-tournament/templates/user/tournament", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DolRuPnL", "block": "{\"statements\":[[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"table-data\"],[15,\"style\",\"margin-left: 70px;\"],[13],[0,\"\\n  \"],[11,\"table\",[]],[13],[0,\"\\n    \"],[11,\"caption\",[]],[13],[0,\"Tournament Details\"],[14],[0,\"\\n\"],[0,\"    \"],[11,\"tbody\",[]],[15,\"id\",\"myTable\"],[13],[0,\"\\n        \\n    \"],[11,\"tr\",[]],[15,\"class\",\"bg-info\"],[13],[0,\"\\n        \"],[11,\"th\",[]],[15,\"class\",\"bgth\"],[13],[0,\"Tournament\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Sports Name\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Event type\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Limits\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"status\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Start Date\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"End Date\"],[14],[0,\"\\n        \"],[11,\"th\",[]],[13],[0,\"Register\"],[14],[0,\"\\n      \\n    \"],[14],[0,\"\\n   \\n    \\n      \"],[1,[33,[\"log\"],[\"model\"],null],false],[0,\"\\n      \"],[1,[33,[\"log\"],[[28,[\"model\"]]],null],false],[0,\"\\n      \\n\\n      \\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[11,\"tr\",[]],[13],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"tournament_name\"]],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"sports_name\"]],false],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"tournaments\",\"event_type\"]]],null,{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Team Participation\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Single Participation\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n        \\n        \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"limits\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"tournaments\",\"status\"]]],null,{\"statements\":[[0,\"       \"],[11,\"td\",[]],[13],[0,\"Started\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"Yet to Start\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"         \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"startDate\"]],false],[14],[0,\"\\n          \"],[11,\"td\",[]],[13],[1,[28,[\"tournaments\",\"endDate\"]],false],[14],[0,\"\\n\\n        \\n\"],[6,[\"if\"],[[28,[\"tournaments\",\"event_type\"]]],null,{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"class\",\"open-button\"],[15,\"onclick\",\"openForm()\"],[5,[\"action\"],[[28,[null]],\"Toregisterteam\",[28,[\"tournaments\",\"tournament_id\"]]]],[13],[0,\"Register\"],[14],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[11,\"button\",[]],[5,[\"action\"],[[28,[null]],\"Toregistersingle\",[28,[\"tournaments\",\"tournament_id\"]]]],[13],[0,\"Register \"],[14],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[\"tournaments\"]},null],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"form-popup\"],[15,\"id\",\"myForm\"],[13],[0,\"\\n        \"],[11,\"form\",[]],[15,\"class\",\"form-container\"],[15,\"style\",\"/*! max-width: ; */\"],[13],[0,\"\\n        \"],[11,\"h1\",[]],[13],[0,\"Team Registration\"],[14],[0,\"\\n\\n            \"],[11,\"label\",[]],[15,\"for\",\"Team\"],[13],[11,\"b\",[]],[13],[0,\"Team Name\"],[14],[14],[0,\"\\n\\n            \\n            \"],[11,\"select\",[]],[15,\"id\",\"team\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"teams\"]]],null,{\"statements\":[[0,\"            \"],[11,\"option\",[]],[16,\"value\",[28,[\"team\",\"team_id\"]],null],[13],[1,[28,[\"team\",\"team_name\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"team\"]},null],[0,\"           \"],[11,\"option\",[]],[15,\"value\",\"0\"],[13],[0,\"create a new team \"],[14],[0,\"\\n            \\n            \\n            \\n            \\n            \"],[14],[0,\"\\n\\n            \"],[11,\"option\",[]],[15,\"value\",\"0\"],[13],[0,\"If u want to create a new team \"],[14],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"id\",\"placeholder\",\"required\"],[\"teamname\",\"new team name\",true]]],false],[0,\"\\n           \\n\\n            \\n            \\n            \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"Toselectedteam\"]],[13],[0,\"Register\"],[14],[0,\"\\n            \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn cancel\"],[15,\"onclick\",\"closeForm()\"],[13],[0,\"Close\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \\n        \"],[11,\"script\",[]],[13],[0,\"\\n            \\nfunction openForm() {\\n  document.getElementById(\\\"myForm\\\").style.display = \\\"block\\\";\\n}\\n\\nfunction closeForm() {\\n  document.getElementById(\\\"myForm\\\").style.display = \\\"none\\\";\\n}\\n\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n  \\n\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\\n \\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "sports-tournament/templates/user/tournament.hbs" } });
});


define('sports-tournament/config/environment', ['ember'], function(Ember) {
  var prefix = 'sports-tournament';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("sports-tournament/app")["default"].create({"name":"sports-tournament","version":"0.0.0+1a37e6ac"});
}
//# sourceMappingURL=sports-tournament.map
