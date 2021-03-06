var CalcFsm = machina.Fsm.extend({
  initialize: function() {
    console.log('CalcFsm.initialize')
  },

  states: {
    uninitialized: {
      start: function() {
        console.log('start.' + this._currentAction);
        this.transition('first');
      }
    }
  }
});

var baseQuestionState = {
  initialize: function(payload) {
    console.log('initialize.' + this._currentAction);
  },
  _container: $('#calc'),
  _onEnter: function(s) {
    console.log('_onEnter.' + this._currentAction);

    var stateObj = this.states[this.state];
    var container = stateObj._container;

    container.hide();
    var body = _.template(stateObj._template, stateObj._templateData(stateObj));
    container.html(body)

    stateObj._bindEvents(this);

    container.fadeIn("fast");
  },
  _onExit: function(s) {
    console.log('_onExit.' + this._currentAction);
    this.states[this.state]._container.hide().html();
  }
};

var questionTypes = {
  choice: {
    _template: $('#choice.template').html(),
    _templateData: function(o) {
      return {
        title: o.title,
        choices: o.choices
      };
    },
    _bindEvents: function(fsm) {
      this._container.find('a').click(function(e) {
        e.preventDefault();
        fsm.handle('choose', $(this).data('state'));
      });
    },
    choose: function(option) {
      console.log('choose.' + this._currentAction);
      // TODO check if option is valid
      window.History.pushState({ state: option }, null, '?s=' + option);
    },
  },

  year_input: {
    _template: $('#year_input.template').html(),
    _templateData: function(o) {
      return {
        title: o.title
      };
    },
    _bindEvents: function(fsm) {
      this._container.find('form').submit(function(e) {
        e.preventDefault();
        var value = $(this).find('input')[0].value;
        fsm.handle('submit', value);
      });
      this._container.find('input[autofocus]').focus();
    },
    submit: function(year) {
      console.log('submit year: ' + year);
      this.handle('validate', year);
    },
    validate: function(year) {
      var o = this.states[this.state];
      var yearN = parseInt($.trim(year));
      if (yearN > 1800 && yearN < 2100) {
        this.handle(o.func.name, yearN, o.func.args);
      } else {
        o._container.find('input').addClass('error');
        o._container.find('small.error').fadeIn('fast');
      }
    },
    greaterThan: function(year, args) {
      var rightsLength = args[0],
          trueState    = args[1],
          falseState   = args[2];

      var current = new Date();
      var currentYear = current.getFullYear();
      var dpYear = year + 1 + rightsLength;

      var newState = null;
      if (currentYear - dpYear >= 0) {
        console.log("Public Domain! :)");
        newState = trueState;
      } else {
        console.log("NOT Public Domain! :(");
        newState = falseState;
      }
      window.History.pushState({ state: newState, year: dpYear }, null, '?s=' + newState + '&y=' + dpYear);
    }
  },

  pd: {
    _template: $('#pd.template').html(),
    _templateData: function(o) {
      return {
        explanation: o.explanation
      };
    },
    _bindEvents: function(fsm) {},
    setDPYear: function(year) {
      var o = this.states[this.state];
      var body = _.template(o.when, { dp_year: year });
      o._container.find('.when').html(body).show();
    },
  },

  npd: {
    _template: $('#npd.template').html(),
    _templateData: function(o) {
      return {
        explanation: o.explanation
      };
    },
    _bindEvents: function(fsm) {},
    setDPYear: function(year) {
      var o = this.states[this.state];
      var body = _.template(o.when, { dp_year: year });
      o._container.find('.when').html(body).show();
    },
  }
};

var calcFsm = null;

$(function() {
  calcFsm = new CalcFsm();

  _.each(questionTypes, function(v, k) {
    questionTypes[k] = _.extend(v, baseQuestionState);
  });

  _.each(questions.AR, function(q) {
    var st = _.clone(q);
    calcFsm.states[q._name] = _.extend(st, questionTypes[q._type]);
  });

  // Bind "statechange" for transitioning to a new state
  // In other words, History.js _rules_ over the FSM.
  var history = window.History;
  history.Adapter.bind(window, 'statechange', function() {
    var state = history.getState();
    history.log('statechange: ', state.data, state.title, state.url);
    if ($.isEmptyObject(state.data)) {
      calcFsm.transition('first');
    } else {
      history.log('calcFsm: transition to ' + JSON.stringify(state.data));
      calcFsm.transition(state.data.state);
      if (state.data.year) {
        calcFsm.handle('setDPYear', state.data.year); }
    }
  });

  // Get current state from query params and transition if possible
  var state = history.getState();
  var params = $.parseParams(state.hash.substring(state.hash.indexOf('?') + 1));

  calcFsm.handle('start');
  if (params.s && calcFsm.states.hasOwnProperty(params.s)) {
    calcFsm.transition(params.s);
    if (params.y) {
      calcFsm.handle('setDPYear', params.y);
    }
  }
});
