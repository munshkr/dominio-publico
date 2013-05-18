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
};

var calcFsm = null;

$(function() {
  if (document.location.protocol === 'file:') {
    alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
  }

  calcFsm = new CalcFsm();

  _.each(questions.AR, function(q) {
    var st = _.clone(q);
    calcFsm.states[q._name] = _.extend(st, questionTypes[q._type]);
  });

  var history = window.History;
  history.Adapter.bind(window, 'statechange', function() {
    var state = history.getState();
    history.log('statechange: ', state.data, state.title, state.url);
    history.log('calcFsm: transition to ' + JSON.stringify(state.data));
    if ($.isEmptyObject(state.data)) {
      calcFsm.transition('first');
    } else {
      calcFsm.transition(state.data.state);
    }
  });


  calcFsm.handle('start');
});
