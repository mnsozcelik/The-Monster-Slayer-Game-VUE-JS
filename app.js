new Vue({
  el: "#app",
  data: {
    playerHeal: 100,
    monsterHeal: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      var point = Math.ceil(Math.random() * 10);
      this.monsterHeal -= point;
      this.monster_attack();
    },
    special_attack: function () {
      var point = Math.ceil(Math.random() * 25);
      this.monsterHeal -= point;
      this.monster_attack();
    },
    heal_up: function () {
      var point = Math.ceil(Math.random() * 20);
      this.playerHeal += point;
      this.monster_attack();
    },
    give_up: function () {
      this.playerHeal = 0;
    },
    monster_attack: function () {
      var point = Math.ceil(Math.random() * 15);
      this.playerHeal -= point;
    },
  },
});
