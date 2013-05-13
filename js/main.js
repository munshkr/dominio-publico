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
      this.transition(option);
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
  calcFsm = new CalcFsm();

  _.each(questions.AR, function(q) {
    var st = _.clone(q);
    calcFsm.states[q._name] = _.extend(st, questionTypes[q._type]);
  });

  calcFsm.handle("start");
});
