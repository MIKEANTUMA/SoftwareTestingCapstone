// @ts-ignore
import { ScoreCards } from './ScoreCard'




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
// @ts-ignore
export class Player  {
  #UserName;
  // @ts-ignore
  #Email;
  // @ts-ignore
  #Password;
  // @ts-ignore
  #FirstName;
  // @ts-ignore
  #LastName;
  // @ts-ignore
  #DoB;
  // #ScoreCards;

  /**
   * @param {IPlayer} player 
   */
  static isValid(player) {
    return typeof player === 'object' && player !== null
      && typeof player.UserName === 'string'

  }

  /**
   * @param {unknown} player
   */
  constructor(player) {
    // @ts-ignore
    this.#UserName = player.email;
    // @ts-ignore
    this.#Email = player.username;
    // @ts-ignore
    this.#Password = player.Password;
    // @ts-ignore
    this.#FirstName = player.FirstName;
    // @ts-ignore
    this.#LastName = player.LastName;
    // @ts-ignore
    this.#DoB = player.DoB;
    // this.#ScoreCards = player.ScoreCards;
  }

  get username() { return this.#UserName; }
}

