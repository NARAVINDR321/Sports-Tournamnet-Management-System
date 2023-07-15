'use strict';

define('sports-tournament/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/admin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin.js should pass ESLint\n\n35:9 - Unexpected console statement. (no-console)\n41:9 - Unexpected console statement. (no-console)\n57:9 - Unexpected console statement. (no-console)\n59:13 - \'readers\' is assigned a value but never used. (no-unused-vars)\n72:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/admin/addtournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/addtournament.js should pass ESLint\n\n12:13 - Unexpected console statement. (no-console)\n15:57 - \'$\' is not defined. (no-undef)\n16:27 - \'$\' is not defined. (no-undef)\n17:26 - \'$\' is not defined. (no-undef)\n18:22 - \'$\' is not defined. (no-undef)\n19:22 - \'$\' is not defined. (no-undef)\n21:9 - Unexpected console statement. (no-console)\n23:13 - \'$\' is not defined. (no-undef)\n44:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/admin/edittournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/edittournament.js should pass ESLint\n\n10:13 - Unexpected console statement. (no-console)\n11:13 - Unexpected console statement. (no-console)\n15:13 - Unexpected console statement. (no-console)\n21:32 - \'$\' is not defined. (no-undef)\n22:27 - \'$\' is not defined. (no-undef)\n23:26 - \'$\' is not defined. (no-undef)\n24:22 - \'$\' is not defined. (no-undef)\n25:22 - \'$\' is not defined. (no-undef)\n32:13 - \'$\' is not defined. (no-undef)\n48:13 - \'$\' is not defined. (no-undef)\n53:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/admin/teamdetails.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/teamdetails.js should pass ESLint\n\n12:13 - \'comsole\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/admin/tournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/tournament.js should pass ESLint\n\n19:13 - Unexpected console statement. (no-console)\n20:13 - Unexpected console statement. (no-console)\n38:21 - Unexpected console statement. (no-console)\n42:25 - Unexpected console statement. (no-console)\n52:13 - Unexpected console statement. (no-console)\n53:13 - Unexpected console statement. (no-console)\n55:13 - Unexpected console statement. (no-console)\n85:13 - Unexpected console statement. (no-console)\n93:21 - Unexpected console statement. (no-console)\n97:25 - Unexpected console statement. (no-console)\n105:13 - \'comsole\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/admin/users.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/admin/users.js should pass ESLint\n\n12:13 - \'comsole\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n23:17 - \'cook\' is defined but never used. (no-unused-vars)\n41:21 - Unexpected console statement. (no-console)\n60:25 - \'admin\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/signup.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/tournaments.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/tournaments.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)\n35:13 - Unexpected console statement. (no-console)\n37:13 - Unexpected console statement. (no-console)\n43:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/edituser.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/edituser.js should pass ESLint\n\n10:13 - Unexpected console statement. (no-console)\n11:13 - Unexpected console statement. (no-console)\n15:13 - Unexpected console statement. (no-console)\n21:21 - \'$\' is not defined. (no-undef)\n22:19 - \'$\' is not defined. (no-undef)\n23:19 - \'$\' is not defined. (no-undef)\n24:23 - \'$\' is not defined. (no-undef)\n25:27 - \'$\' is not defined. (no-undef)\n28:13 - Unexpected console statement. (no-console)\n29:13 - Unexpected console statement. (no-console)\n32:13 - \'$\' is not defined. (no-undef)\n53:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/tournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/tournament.js should pass ESLint\n\n27:13 - Unexpected console statement. (no-console)\n28:13 - Unexpected console statement. (no-console)\n29:13 - Unexpected console statement. (no-console)\n39:27 - \'uid\' is not defined. (no-undef)\n53:21 - Unexpected console statement. (no-console)\n57:25 - Unexpected console statement. (no-console)\n69:13 - Unexpected console statement. (no-console)\n73:13 - Unexpected console statement. (no-console)\n78:17 - \'teams\' is assigned a value but never used. (no-unused-vars)\n86:21 - Unexpected console statement. (no-console)\n91:25 - Unexpected console statement. (no-console)\n123:35 - \'param\' is defined but never used. (no-unused-vars)\n125:13 - Unexpected console statement. (no-console)\n131:17 - \'team\' is defined but never used. (no-unused-vars)\n141:17 - Unexpected console statement. (no-console)\n164:22 - \'teamdetailsresponse\' is assigned a value but never used. (no-unused-vars)\n170:38 - \'data\' is defined but never used. (no-unused-vars)\n180:33 - Unexpected console statement. (no-console)\n189:41 - Unexpected console statement. (no-console)\n195:45 - Unexpected console statement. (no-console)\n209:29 - Unexpected console statement. (no-console)\n236:37 - Unexpected console statement. (no-console)\n241:41 - Unexpected console statement. (no-console)\n257:17 - Unexpected console statement. (no-console)\n259:21 - \'teammembers\' is already defined. (no-redeclare)\n266:22 - \'teamparticipation\' is already defined. (no-redeclare)\n284:25 - Unexpected console statement. (no-console)\n289:29 - Unexpected console statement. (no-console)\n302:29 - Unexpected console statement. (no-console)\n307:33 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/admin.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin.js should pass ESLint\n\n2:8 - \'$\' is defined but never used. (no-unused-vars)\n15:13 - Unexpected console statement. (no-console)\n17:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/admin/addtournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/addtournament.js should pass ESLint\n\n6:9 - Unexpected console statement. (no-console)\n14:13 - Unexpected console statement. (no-console)\n17:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/admin/edittournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/edittournament.js should pass ESLint\n\n7:9 - Unexpected console statement. (no-console)\n15:13 - Unexpected console statement. (no-console)\n18:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/admin/teamdetails.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/teamdetails.js should pass ESLint\n\n6:9 - Unexpected console statement. (no-console)\n14:13 - Unexpected console statement. (no-console)\n17:9 - Unexpected console statement. (no-console)\n30:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/admin/tournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/tournament.js should pass ESLint\n\n7:9 - Unexpected console statement. (no-console)\n15:13 - Unexpected console statement. (no-console)\n18:9 - Unexpected console statement. (no-console)\n30:9 - Unexpected console statement. (no-console)\n39:13 - Unexpected console statement. (no-console)\n42:9 - Unexpected console statement. (no-console)\n52:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/admin/users.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/users.js should pass ESLint\n\n7:9 - Unexpected console statement. (no-console)\n15:13 - Unexpected console statement. (no-console)\n18:9 - Unexpected console statement. (no-console)\n30:8 - \'$\' is not defined. (no-undef)\n41:12 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tournaments.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/tournaments.js should pass ESLint\n\n6:13 - \'role\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user.js should pass ESLint\n\n12:13 - Unexpected console statement. (no-console)\n15:9 - Unexpected console statement. (no-console)\n16:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/user/edituser.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/edituser.js should pass ESLint\n\n13:13 - Unexpected console statement. (no-console)\n16:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/user/tournament.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/tournament.js should pass ESLint\n\n11:9 - Unexpected console statement. (no-console)\n19:13 - Unexpected console statement. (no-console)\n22:9 - Unexpected console statement. (no-console)\n40:9 - \'$\' is not defined. (no-undef)');
  });
});
define('sports-tournament/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('sports-tournament/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'sports-tournament/tests/helpers/start-app', 'sports-tournament/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('sports-tournament/tests/helpers/resolver', ['exports', 'sports-tournament/resolver', 'sports-tournament/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('sports-tournament/tests/helpers/start-app', ['exports', 'sports-tournament/app', 'sports-tournament/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('sports-tournament/tests/test-helper', ['sports-tournament/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('sports-tournament/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/addtournament-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/addtournament-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/edittournament-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/edittournament-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/single-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/single-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/team-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/teamdetails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/teamdetails-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/admin/tournament-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin/tournament-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/group-conversion-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/group-conversion-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tournaments-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tournaments-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/edituser-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/edituser-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/tournament-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/tournament-test.js should pass ESLint\n\n');
  });
});
define('sports-tournament/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('sports-tournament/tests/unit/routes/admin-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/addtournament-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/addtournament', 'Unit | Route | admin/addtournament', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/edittournament-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/edittournament', 'Unit | Route | admin/edittournament', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/single-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/single', 'Unit | Route | admin/single', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/team-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/team', 'Unit | Route | admin/team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/teamdetails-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/teamdetails', 'Unit | Route | admin/teamdetails', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/admin/tournament-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:admin/tournament', 'Unit | Route | admin/tournament', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/group-conversion-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:group-conversion', 'Unit | Route | group conversion', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/signup-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/tournaments-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tournaments', 'Unit | Route | tournaments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user', 'Unit | Route | user', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/user/edituser-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user/edituser', 'Unit | Route | user/edituser', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sports-tournament/tests/unit/routes/user/tournament-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:user/tournament', 'Unit | Route | user/tournament', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('sports-tournament/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
