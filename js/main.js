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

    container.fadeIn();
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
    },
    submit: function(year) {
      console.log('submit year: ' + year);
      // TODO check if year is valid
      var o = this.states[this.state];
      this.handle(o.func.name, year, o.func.args);
    },
    greaterThan: function(year, args) {
      var threshold  = args[0],
          trueState  = args[1],
          falseState = args[2];

      var current = new Date();
      var currentYear = current.getFullYear();

      var newState = null;
      if (currentYear - year > 70) {
        console.log("Public Domain! :)");
        newState = trueState;
      } else {
        console.log("NOT Public Domain! :(");
        newState = falseState;
      }
      window.History.pushState({ state: newState }, null, '?s=' + newState);
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
  },

  npd: {
    _template: $('#npd.template').html(),
    _templateData: function(o) {
      return {
        explanation: o.explanation
      };
    },
    _bindEvents: function(fsm) {},
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
    }
  });

  // Get current state from query params and transition if possible
  var state = history.getState();
  var params = $.parseParams(state.hash.substring(state.hash.indexOf('?') + 1));
  var s = params.s;

  calcFsm.handle('start');
  if (s && calcFsm.states.hasOwnProperty(s)) {
    console.log('going to ' + s);
    calcFsm.transition(s);
  }
});
