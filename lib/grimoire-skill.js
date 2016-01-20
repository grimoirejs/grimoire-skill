/**
 * grimoire-skill
 *
 * @license MIT
 * @copyright Voxable 2016
 */

/**
 * Create new Amazon Alexa skills using the grimoire framework.
 * @module grimoire-skill
 */

'use strict';

/**
 * Expose `createSkill()`.
 */

exports = module.exports = createSkill;

/**
 * Create a new grimoire skill.
 *
 * @param   {String} invocationName - The invocation name for the skill.
 * @returns {Object} The new skill.
 */
function createSkill( invocationName ) {

  return {
    /**
     * Get the invocation name of the skill.
     *
     * @returns {String} The invocation name.
     */
    get invocationName() {
      return invocationName;
    },


    /**
     * Set the invocation name of the skill.
     *
     * @param {string} newInvocationName - The new invocation name.
     */
    set invocationName( newInvocationName ) {
      invocationName = newInvocationName;
    },

    /**
     * Get the invocation name of the skill. Alias of `invocationName` getter.
     *
     * @see invocationName
     * @returns {String} The invocation name.
     */
    get name() {
      return invocationName;
    },


    /**
     * Set the invocation name of the skill. Alias of `invocationName` setter.
     *
     * @see invocationName
     * @param {string} newInvocationName - The new invocation name.
     */
    set name( newInvocationName ) {
      invocationName = newInvocationName;
    }
  }
}

