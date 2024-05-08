//Method #1

let ladder = {
  step : 0,
  up : function () {
    this.step++;
  },
  down : function () {
    this.step--;
  },
  showStep : function () {
    if (this.step < 0) {
      this.step = 0;
    }

    alert(this.step);
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

//Method #2

let chainLadder = {
  step : 0,
  up : function () {
    this.step++;
    return this;
  },
  down : function () {
    this.step--;
    return this;
  },
  showStep : function () {
    if (this.step < 0) {
      this.step = 0;
    }

    alert(this.step);
    return this;
  },
};

chainLadder.up().up().down().showStep(); // 1
