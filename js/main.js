var CalcFsm = machina.Fsm.extend({
  initialize: function() {
    console.log("CalcFsm.initialize")
  },

  states: {
    uninitialized: {
      start: function() {
        console.log("start." + this._currentAction);
        this.transition("first");
      }
    }
  }
});

var questionTypes = {
  choice: {
    initialize: function(payload) {
      console.log("initialize." + this._currentAction);
    },
    choose: function(option) {
      console.log("choose." + this._currentAction);
      // TODO check if option is valid
      window.History.pushState({ state: option }, null, "?s=" + option);
    },
    _onEnter: function(s) {
      console.log("_onEnter." + this._currentAction);

      var container = $("#calc")
      container.hide();

      var stateData = this.states[this.state];
      var body = _.template($("#choice.template").html(), {
        title: stateData.title,
        choices: stateData.choices
      });
      container.html(body)

      var fsm = this;
      container.find("a").click(function(e) {
        e.preventDefault();
        fsm.handle("choose", $(this).data("state"));
      });

      container.fadeIn();
    },
    _onExit: function(s) {
      console.log("_onExit." + this._currentAction);

      $("#calc").hide().html();
    }
  },

  year_input: {
    submit: function(year) {
      console.log("submit year: " + year);
    },
    _onEnter: function(s) {
      console.log("_onEnter." + this._currentAction);

      var container = $("#calc")
      container.hide();

      var stateData = this.states[this.state];
      var body = _.template($("#year_input.template").html(), {
        title: stateData.title
      });
      container.html(body)

      var fsm = this;
      container.find("form").submit(function(e) {
        e.preventDefault();
        var value = $(this).find("input")[0].value;
        fsm.handle("submit", value);
      });

      container.fadeIn();
    },
    _onExit: function(s) {
      console.log("_onExit." + this._currentAction);

      $("#calc").hide().html();
    }
  }
};

var calcFsm = null;

$(function() {
  calcFsm = new CalcFsm();

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
  var params = $.parseParams(state.hash.slice(2, -1));
  var s = params.s;
  if (s && calcFsm.states.hasOwnProperty(s)) {
    calcFsm.transition(s);
  } else {
    calcFsm.handle('start');
  }
});
