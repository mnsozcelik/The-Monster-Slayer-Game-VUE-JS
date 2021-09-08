new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    game_is_on: false,
    attack_multiple: 10,
    special_attack_multiple: 25,
    heal_up_multiple: 20,
    monster_attack_multiple: 15,
    log_text: {
      attack: "Player Attack : ",
      special_attack: "Special Player Attack : ",
      monster_attack: "Monster Attack : ",
      heal_up: "Player Heal Up : ",
      give_up: "Player Give Up : ",
    },
    logs: [],
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      var point = Math.ceil(Math.random() * this.attack_multiple);
      this.monsterHealth -= point;
      this.add_to_log({ turn: "p", text: this.log_text.attack + point });
      this.monster_attack();
    },
    special_attack: function () {
      var point = Math.ceil(Math.random() * this.special_attack_multiple);
      this.monsterHealth -= point;
      this.add_to_log({
        turn: "p",
        text: this.log_text.special_attack + point,
      });
      this.monster_attack();
    },
    heal_up: function () {
      var point = Math.ceil(Math.random() * this.heal_up_multiple);
      this.playerHealth += point;
      this.add_to_log({ turn: "p", text: this.log_text.heal_up + point });
      this.monster_attack();
    },
    give_up: function () {
      this.playerHealth = 0;
      this.add_to_log({ turn: "p", text: this.log_text.heal_up });
    },
    monster_attack: function () {
      var point = Math.ceil(Math.random() * this.monster_attack_multiple);
      this.playerHealth -= point;
      this.add_to_log({
        turn: "m",
        text: this.log_text.monster_attack + point,
      });
    },
    add_to_log: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    playerHealth: function (value) {
      if (value <= 0) {
        this.playerHealth = 0;
        if (confirm("Game Over. Do you want play again?")) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.logs = {};
        }
      } else if (value >= 100) {
        this.playerHealth = 100;
      }
    },
    monsterHealth: function (value) {
      if (value <= 0) {
        this.monsterHealth = 0;
        if (confirm("You Win!! Do you want play again?")) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
        }
      }
    },
  },
  computed: {
    player_progress: function () {
      return {
        width: this.playerHealth + "%",
      };
    },
    monster_progress: function () {
      return {
        width: this.monsterHealth + "%",
      };
    },
  },
});
