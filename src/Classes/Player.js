import ScoreCards from './ScoreCard'




/**
 * @typedef {{
 *  UserName: string;
 *  Email: string;
 *  Password: string;
 *  FirstName: string;
 *  LastName: string;
 *  DoB: Date;
 *  ScoreCards: ScoreCards[];
 * }} IPlayer
 */

/**
 * @implements {IPlayer}
 */
export class Player2 {
  #UserName;
  #Email;
  #Password;
  #FirstName;
  #LastName;
  #DoB;
  #ScoreCards;

  /**
   * @param {unknown} player 
   */
  static isValid(player) {
    return typeof player === 'object' && player !== null
      && typeof player.UserName === 'string'

  }

  /**
   * @param {IPlayer} player
   */
  constructor(player) {
    this.#UserName = player.UserName;
    this.#Email = player.Email;
    this.#Password = player.Password;
    this.#FirstName = player.FirstName;
    this.#LastName = player.LastName;
    this.#DoB = player.DoB;
    this.#ScoreCards = player.ScoreCards;
  }

  get username() { return this.#UserName; }
}

